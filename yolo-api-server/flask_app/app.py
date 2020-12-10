from flask import Flask, request, jsonify, send_file
from detect import detect
from werkzeug.utils import secure_filename

server = Flask(__name__)

@server.route('/')
def index():
    return "TEST"

@server.route('/yolo')
def hello_user():
    return "yolo"

@server.route('/userLogin', methods = ['POST'])
def userLogin():
    user = request.get_json()#json 데이터를 받아옴
    return jsonify(user)# 받아온 데이터를 다시 전송

@server.route('/environments/<language>')
def environments(language):
    return jsonify({"language":language})

@server.route('/predict', methods=['GET', 'POST'])
def predict():
    if request.method == 'POST':
        file = request.files['file']
        filename = secure_filename(file.filename)
        source = "./data/images/" + filename
        file.save(source)
        detect(source)
        if file is not None:
            return send_file('/usr/src/app/runs/detect/exp/' + filename, 'image/jpeg')
    elif request.method == 'GET':
        return send_file('/usr/src/app/runs/detect/exp/' + filename, 'image/jpeg')

@server.route('/test', methods=['POST'])
def test():
    file = request.files['file']
    fname = secure_filename(file.filename)
    file.save(fname)
    return "file upload successfully"