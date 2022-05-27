from ..config.mysqlconnection import connectToMySQL
from flask import flash


class User:
    def __init__(self,data):
        self.id = data['id']
        self.name = data['name']
        self.location = data['location']
        self.languages = data['languages']
        self.comments = data['comments']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        
    @classmethod
    def get_user(cls):
        query="SELECT * FROM users ORDER BY users.id DESC LIMIT 1;"
        results = connectToMySQL("dojo_db").query(query)
        return User(results[0])
        
        
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users;"
        # make sure to call the connectToMySQL function with the schema you are targeting.
        results = connectToMySQL('dojo_db').query_db(query)
        # Create an empty list to append our instances of friends
        users = []
        # Iterate over the db results and create instances of friends with cls.
        for user in results:
            users.append( cls(user) )
        return users
            
            
    
    
    @classmethod
    def save(cls, data ):
        query = "INSERT INTO users ( name, location, languages, comments) VALUES ( %(name)s , %(location)s , %(languages)s , %(comments)s,);"
        # data is a dictionary that will be passed into the save method from server.py
        return connectToMySQL('dojo_db').query_db( query, data )
    
    
    @staticmethod
    def is_valid(user):
        is_valid = True # we assume this is true
        if len(user['name']) < 3:
            is_valid = False
            flash("Name must be at least 3 characters.")
        if len(user['location']) < 1:
            is_valid = False
            flash("Must choose a dojo location.")
        if len(user['languages']) < 1:
            is_valid = False
            flash("Calories must be 200 or greater.")
        if len(user['comments']) < 1:
            is_valid = False
            flash("Bun must be at least 3 characters.")
        return is_valid