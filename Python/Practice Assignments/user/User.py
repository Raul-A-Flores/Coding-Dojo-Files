
class User:

    def __init__(self, name ):
        self.name = name
        self.account_balance= 0 

    def make_deposit(self, amount):
        self.account_balance += amount
    
    def withdrawl(self, amount):
        self.account_balance -= amount

    def display_user_balance(self):
        print(f"User: {self.name}, Your Balance:  {self.account_balance}")


        
raul = User("Raul")
dor = User("Dor")
alex = User("Alex")

raul.make_deposit(100)
raul.make_deposit(200)
raul.make_deposit(200)
raul.withdrawl(200)
raul.display_user_balance()

dor.make_deposit(300)
dor.make_deposit(200)
dor.withdrawl(300)
dor.withdrawl(100)
dor.display_user_balance()

alex.make_deposit(1000)
alex.withdrawl(100)
alex.withdrawl(100)
alex.withdrawl(100)
alex.display_user_balance()

raul.transfer_money(100, dor)