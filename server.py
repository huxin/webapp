from flask import Flask
from flask import request

app = Flask(__name__)

@app.route('/')
def main():
    return open('index.html', 'r').read()

@app.route('/compute')
def compute():
    v1 = request.args.get('v1')
    v2 = request.args.get('v2')
    print int(v1)
    return str(int(v1) + int(v2))

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080, debug = True)