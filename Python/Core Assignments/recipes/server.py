from flask_app import app
from flask_app.controllers import users

#this needs to be at the bottom 
if __name__ == "__main__":
    app.run(debug=True)