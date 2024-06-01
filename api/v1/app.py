#!/usr/bin/python3
"""
Create an app that returns the status of an API
"""

from flask import Flask
from flask.json import jsonify
from models import storage
from api.v1.views import app_views
from os import getenv
from flask_cors import CORS

HBNB_API_HOST = getenv('HBNB_API_HOST', '0.0.0.0')
HBNB_API_PORT = getenv('HBNB_API_PORT', 5000)
app = Flask(__name__)
app.register_blueprint(app_views)
CORS(app, origins="0.0.0.0")


@app.teardown_appcontext
def db_close(self):
    """
    close the storage on close down
    """
    storage.close()


@app.errorhandler(404)
def not_found(e):
    """Handler for the 404 error"""
    return jsonify(error="Not found"), 404


if __name__ == "__main__":
    app.run(host=HBNB_API_HOST, port=HBNB_API_PORT, threaded=True)
