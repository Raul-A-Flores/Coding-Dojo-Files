import java.util.ArrayList;
public class CafeUtil {
    
    public int getStreakGoal(){
        int sum = 0;
        for (int i= 1; i <= 10; i++ ){
            sum += i;
        }
        return sum;
    }

    public double getOrderTotal(double[] prices){
        
        
        double sum = 0;

        for(double num : prices){
            sum +=num;
        }
        return sum;
        }


    public void displayMenu(ArrayList<String> menuItems){

        int i = 0;
        for(String item : menuItems){
            System.out.println(i + " " + item);
            i++;
        }

    }
    }

