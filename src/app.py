# app.py
# Black Swan 3D Printing
#
# Creates the app.

from flask import Flask
from .bs3d import website


def create_app():
    inner_app = Flask(__name__, static_folder=None)
    inner_app.register_blueprint(website.views.bp)

    return inner_app


app = create_app()