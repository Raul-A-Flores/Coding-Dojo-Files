from flask_app import app
from flask import render_template,redirect,request,session,flash
from flask_app.models.user import User


@app.route("/")
def survey():
    return render_template("index.html")



@app.route('/create/user', methods=['POST'])
def create_user():
    if User.is_valid(request.form):
        User.save(request.form)
        return redirect('/home')
    return redirect('/')

@app.route('/home')
def results():
    return render_template('info.html', users = User.get_user())