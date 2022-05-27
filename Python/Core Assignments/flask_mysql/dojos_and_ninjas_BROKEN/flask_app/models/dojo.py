from flask_app.config.mysqlconnection import connectToMySQL


class Dojo:
    def __init__(self,data):
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']


    @classmethod
    def create(cls, data): 
        query = "INSERT INTO dojos (name) VALUES (%(name)s);"
        dojo_id = connectToMySQL('dojos_and_ninjas').query_db(query,data)
        return dojo_id

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM dojos;"
        dojos = []
        results = connectToMySQL('dojos_and_ninjas').query_db(query)
        for row in results:
            dojos.append(cls(row))
        return dojos

        
    @classmethod
    def get_one(cls, data):
        query ="SELECT * FROM dojos WHERE id = %(id)s;"
        results = connectToMySQL('dojos_and_ninjas').query_db(query,data)
        if results:
            return cls(results[0])
        return False