public class BankAccount {
    
    private double checkingBal;
    private double savingsBal;


    public BankAccount() {
    }


    public void transaction(String type, String account, int amt) {
        if(type == "deposit") {

            if(account == "checking") {
                this.checkingBal += amt;
                System.out.println("You have made a deposit to your checking account in the amount of " + amt + ". Your current checking balance is now " + this.checkingBal);
            }
            else if (account == "savings") {
                this.savingsBal += amt;
                System.out.println("You have made a deposit to your savings account in the amount of " + amt + ". Your current savings balance is now " + this.savingsBal);
            }
            else {
                System.out.println("Must enter either checking or savings to make a deposit!");
            }
        }
        else if(type == "withdrawal") {
            if(account == "checking") {
                if(this.checkingBal < amt) {
                    System.out.println("Insufficient Funds");
                    return;
                }
                this.checkingBal -= amt;
                System.out.println("You have withdrawn from your checking account in the amount of " + amt + ". Your current checking balance is now " + this.checkingBal);
            }
            else if (account == "savings") {
                if(this.savingsBal < amt) {
                    System.out.println("Insufficient Funds");
                    return;
                }
                this.savingsBal -= amt;
                System.out.println("You have withdrawn from your savings account in the amount of " + amt + ". Your current savings balance is now " + this.savingsBal);
            }
            else {
                System.out.println("Must enter either checking or savings in order to proceed");
            }
        }
        else {
            System.out.println("Must enter deposit or withdrawal in order to complete transaction");
        }
    }

    public void deposit(String account, int amt) {
        if(account == "checking") {
            this.checkingBal += amt;
            System.out.println("You have made a deposit to your checking account in the amount of " + amt + ". Your current checking balance is now " + this.checkingBal);
        }
        else if (account == "savings") {
            this.savingsBal += amt;
            System.out.println("You have made a deposit to your savings account in the amount of " + amt + ". Your current savings balance is now " + this.savingsBal);
        }
        else {
            System.out.println("Must enter either checking or savings to make a deposit.");
        }
    }

    public void withdraw(String account, int amt) {
        if(account == "checking") {
            this.checkingBal -= amt;
            System.out.println("You have withdrawn from your checking account in the amount of " + amt + ". Your current checking balance is now " + this.checkingBal);
        }
        else if (account == "savings") {
            this.savingsBal -= amt;
            System.out.println("You have withdrawn from your savings account in the amount of " + amt + ". Your current savings balance is now " + this.savingsBal);
        }
        else {
            System.out.println("Must enter either checking or savings to make a taking monies out!");
        }
    }


    public void allBal() {
        double all = this.checkingBal+this.savingsBal;
        System.out.println("Total balance from both Checking and Saving: " + all);
    }




    
    public void setCheckingBal(double amt) {
        this.checkingBal = amt;
    }

    public void setSavingsBal(double amt) {
        this.savingsBal = amt;
    }

    
    public double getCheckingBal() {
        System.out.println("Checking account balance: " + this.checkingBal);
        return this.checkingBal;
    }

    public double getSavingsBal() {
        System.out.println("Savings account balance: " + this.savingsBal);
        return this.savingsBal;
    }

    


}