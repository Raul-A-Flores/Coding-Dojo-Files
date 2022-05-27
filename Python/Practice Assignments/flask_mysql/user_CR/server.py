from flask import Flask, render_template, request, redirect
from user import User


app = Flask(__name__)

@app.route('/')
def index():
    users = User.get_all()
    print(users)
    return render_template("index.html", all_users = users)

@app.route('/create/user', methods=["POST"])
def create_user():

    print(request.form)
    User.save(request.form)
    return redirect('/users')

@app.route('/users')
def new_user():
    users = User.get_all()
    print(users)
    return render_template("users.html", all_users = users)
            
if __name__ == "__main__":
    app.run(debug=True)

