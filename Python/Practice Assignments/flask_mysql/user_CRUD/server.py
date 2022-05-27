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


@app.route('/user/edit/<int:id>')
def edit(id):
    data ={
        'id':id
    }
    return render_template("edit.html", user=User.get_one(data))

@app.route('/user/destroy/<int:id>')
def destroy(id):
    data ={
        'id': id
    }
    User.destroy(data)
    return redirect('/users')

@app.route('/user/show/<int:id>')
def show(id):
    data ={ 
        "id":id
    }
    return render_template("show.html",user=User.get_one(data))


@app.route('/user/update',methods=['POST'])
def update():
    User.update(request.form)
    return redirect('/users')
    
    
if __name__ == "__main__":
    app.run(debug=True)

