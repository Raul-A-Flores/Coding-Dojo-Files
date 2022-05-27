public class CafeJava {
    public static void main(String[] args) {
        // APP VARIABLES
        // Lines of text that will appear in the app. 
        String generalGreeting = "Welcome to Cafe Java, ";
        String pendingMessage = ", your order will be ready shortly";
        String readyMessage = ", your order is ready";
        String displayTotalMessage = "Your total is $";
        
        // Menu variables (add yours below)
        double mochaPrice = 3.5;
        double dripCoffee = 1.5;
        double latte = 2.5;
        double cappuccino = 2.0;

    
        // Customer name variables (add yours below)
        String customer1 = "Cindhuri";
        String customer2 = "Sam";
        String customer3 = "Jimmy";
        String customer4 = "Noah";
    
        // Order completions (add yours below)
        boolean isReadyOrder1 = false;
        boolean isReadyOrder2 = true;
        boolean isReadyOrder3 = false;
        boolean isReadyOrder4 = true;


    
        // APP INTERACTION SIMULATION (Add your code for the challenges below)
        // Example:
        System.out.println(generalGreeting + customer1);
        System.out.println(customer1 + displayTotalMessage + dripCoffee + pendingMessage); 
        System.out.println(customer4 + displayTotalMessage + cappuccino + readyMessage); 


        if(isReadyOrder4){
            System.out.println(customer4 + displayTotalMessage + cappuccino + readyMessage); 
        }
        else {
            System.out.println(customer4 + displayTotalMessage + cappuccino + pendingMessage); 
        };
        
        double customer2Order = cappuccino + cappuccino;
        if(isReadyOrder2){
            System.out.println(customer2 + displayTotalMessage + customer2Order + readyMessage); 
        }
        else {
            System.out.println(customer4 + pendingMessage); 
        }
    	// ** Your customer interaction print statements will go here ** //
    }
}