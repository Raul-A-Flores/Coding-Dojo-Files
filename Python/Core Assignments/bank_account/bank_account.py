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
        
        


user1 = BankAccount(0.01, 700)
user2 = BankAccount(0.03, 300)

user1.deposit(200).deposit(300).deposit(400).withdrawl(300).yield_interest().display_account_info()
user2.deposit(300).deposit(400).withdrawl(400).withdrawl(100).yield_interest().display_account_info()


