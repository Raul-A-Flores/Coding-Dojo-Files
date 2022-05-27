
class User:

    def __init__(self, name ):
        self.name = name
        self.account_balance= 0 

    def make_deposit(self, amount):
        self.account_balance += amount
        return self
    
    def withdrawl(self, amount):
        self.account_balance -= amount
        return self

    def display_user_balance(self):
        print(f"User: {self.name}, Your Balance:  {self.account_balance}")


        
raul = User("Raul")
dor = User("Dor")
alex = User("Alex")

raul.make_deposit(200).make_deposit(300).make_deposit(400).withdrawl(220).display_user_balance()