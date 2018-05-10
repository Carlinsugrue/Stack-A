from flask import Flask
from flask import render_template
from pymongo import MongoClient
import json
from bson import json_util
from bson.json_util import dumps

app = Flask(__name__)

MONGODB_HOST = 'localhost'
MONGODB_PORT = 27017
DBS_NAME = 'nzcrime2017'
COLLECTION_NAME = 'victims'
FIELDS = {'Territorial Authority': True, 'Crime Type': True, 'Location Type': True, 'Year Month': True, 'Victimisations': True, '_id': False}


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/nzcrime2017/victims")
def nzcrime2017_victims():
    connection = MongoClient(MONGODB_HOST, MONGODB_PORT)
    collection = connection[DBS_NAME][COLLECTION_NAME]
    victims = collection.find(projection=FIELDS, limit=220000)
    #victims = collection.find(projection=FIELDS)
    json_victims = []
    for victim in victims:
        json_victims.append(victim)
    json_victims = json.dumps(json_victims, default=json_util.default)
    connection.close()
    return json_victims

if __name__ == "__main__":
    app.run(host='0.0.0.0',port=5000,debug=True)