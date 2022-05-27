from flask_app import app
from flask import redirect, render_template,request
from flask_app.models.dojo import Dojo
from flask_app.models.ninja import Ninja



@app.route('/')
def index():
    return redirect('/dojos')


@app.route('/ninjas')
def books():
    return render_template('ninjas.html', all_dojos =Dojo.get_all())


@app.route('/dojos')
def dojos():
    return render_template('dojos.html', all_dojos =Dojo.get_all())

@app.route('/create/ninja',methods=['POST'])
def create_ninja():
    print(request.form)
    Ninja.create(request.form)
    return redirect('/dojos')

@app.route('/dojos/<int:id>')
def show_ninjas(id):
    data = {
        "id": id
    }
    return render_template('show_dojo.html',all_ninjas=Ninja.get_all(),dojo=Dojo.get_one(data))

@app.route('/create/dojo', methods=["POST"])
def create_dojo():
    Dojo.create(request.form)
    return redirect('/dojos')
