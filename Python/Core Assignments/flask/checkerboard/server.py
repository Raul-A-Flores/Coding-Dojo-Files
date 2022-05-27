from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def index():
    return("Hello")

@app.route('/<int:numx>')
def table(numx):
    return render_template('index.html', numx = numx)

@app.route('/<int:numx>/<int:numy>')
def table(numy):
    return render_template('index.html', numy = numy)

if __name__ == "__main__":
    app.run(debug=True)
