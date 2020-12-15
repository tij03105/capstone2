from flask import Flask, request, jsonify, send_file
from detect import detect
from werkzeug.utils import secure_filename
from flask_cors import CORS

server = Flask(__name__)
CORS(server)

@server.route('/')
def index():
    return "TEST"

@server.route('/yolo')
def hello_user():
    return "yolo"

@server.route('/predict', methods=['GET', 'POST'])
def predict():
    filename = 'result.mp4'
    if request.method == 'POST':
        file = request.files['file']
        source = "./data/images/" + filename
        file.save(source)
        detect(source)
        return send_file('/usr/src/app/runs/detect/exp/' + filename, 'video/mp4')
    elif request.method == 'GET':
        return send_file('/usr/src/app/runs/detect/exp/' + filename, 'video/mp4')
