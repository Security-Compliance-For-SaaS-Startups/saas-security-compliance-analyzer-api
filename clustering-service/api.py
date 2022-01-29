import flask
from flask import request, jsonify
from main import ML
from flask import request

app = flask.Flask(__name__)
app.config["DEBUG"] = True


@app.route('/response-cluster', methods=['GET'])
def home():
    category = request.args.get('category', default="CatAGov", type=str)
    cluster = ML.cluster_response(self=ML, category=category)
    print(cluster[0])
    return jsonify(str(cluster[0]))


app.run()
