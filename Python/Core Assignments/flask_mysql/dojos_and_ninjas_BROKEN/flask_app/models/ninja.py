from flask_app.config.mysqlconnection import connectToMySQL

class Ninja:
    def __init__(self, data):
        self.id = data['id']
        self.title = data['first_name']
        self.last_name = data['last_name']
        self.age = data['age']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    
    @classmethod
    def create(cls,data):
        query = "INSERT INTO ninjas (first_name, last_name, age) VALUES (%(dojo_id), %(first_name)s, %(last_name)s, %(age)s);"
        ninja_id = connectToMySQL('dojos_and_ninjas').query_db(query,data)
        return ninja_id
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM ninjas;"
        ninjas = []
        results = connectToMySQL('dojos_and_ninjas').query_db(query)
        return ninjas
        
    @classmethod
    def get_one(cls,data):
        query = "SELECT * FROM ninjas WHERE id = %(id)s;"
        results = connectToMySQL('dojos_and_ninjas').query_db(query,data)
