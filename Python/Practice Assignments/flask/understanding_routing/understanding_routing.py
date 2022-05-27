from flask import Flask 
app = Flask(__name__)   
@app.route('/')
def hello_world():
    return 'Hello World!' 

@app.route('/dojo')
def dojo():
    return 'dojo'

@app.route('/say/<name>')
def say(name):
    print(name)
    return name

@app.route('/repeat/<num>/hello')
def repeat(num):
        print('hello')
        return 'hello ' * int(num)


@app.route('/dor/dor')
def dor():
    return'dor'
if __name__=="__main__":     
    app.run(debug=True) 