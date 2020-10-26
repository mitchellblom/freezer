import os
import sys

from flask import Flask, g, render_template, url_for
from flask_flatpages import FlatPages
from flask_frozen import Freezer
import flask_sijax

DEBUG = True
FLATPAGES_AUTO_RELOAD = DEBUG
FLATPAGES_EXTENSION = ".md"

app = Flask(__name__)
app.config.from_object(__name__)
pages = FlatPages(app)
freezer = Freezer(app)

path = os.path.join('.', os.path.dirname(__file__), 'static/js/sijax/')

app.config['SIJAX_STATIC_PATH'] = path
app.config['SIJAX_JSON_URI'] = '/static/js/sijax/json2.js'
flask_sijax.Sijax(app)


@app.route("/", methods=['GET', 'POST'])
def index():
    page = pages.get_or_404('welcome')

    def say_hi(obj_response):
        obj_response.alert('Hi there!')
    if g.sijax.is_sijax_request:
        # Sijax request detected - let Sijax handle it
        g.sijax.register_callback('say_hi', say_hi)
        return g.sijax.process_request()
        
    return render_template('index.html', pages=pages, page=page)


@app.route("/<path:path>.html")
def page(path):
    page = pages.get_or_404(path)
    return render_template('index.html', pages=pages, page=page)


@freezer.register_generator
def pagelist():
    for page in pages:
        yield url_for("page", path=page.path)


if __name__ == "__main__":
    if len(sys.argv) > 1 and sys.argv[1] == "build":
        freezer.freeze()
    else:
        app.run(host="0.0.0.0", port=5001)
