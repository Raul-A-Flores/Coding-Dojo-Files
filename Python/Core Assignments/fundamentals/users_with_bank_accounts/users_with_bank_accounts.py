class BankAccount:
    
    def __init__(self, int_rate, balance):
        self.int_rate = int_rate
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        return self
        
    def withdrawl(self, amount):  
        if self.balance <= amount: 
            print("Insuffient funds: Charging a $5 fee")
            self.balance -= 5
        else:
            self.balance -= amount
        return self
    
    def display_account_info(self):
        print(f"Account Balance: {self.balance}")
        return self

    def yield_interest(self):
        self.balance += self.balance* self.int_rate
        return self
        


class User:

    def __init__(self, name ):
        self.name = name
        self.account = BankAccount(int_rate = 0.05, balance = 0)

    
    def make_deposit(self, amount):
        self.account.deposit(amount)
        return self

    def make_withdrawl(self, amount):
        self.account.withdrawl(amount)
        return self

    def display_user_balance(self):
        print(f"User: {self.name}, Your Balance:  {self.account.balance}")
        return self


user1 = User("Raul")
user1.make_deposit(100)
user1.display_user_balance()

