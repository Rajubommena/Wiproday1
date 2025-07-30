package Assess;
import java.util.Scanner;
public class RetailShop {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

        double totalRetailValue = 0.0; 

        while (true) {
            
            System.out.print("Enter product number (1, 2, 3) or 0 to exit: ");
            int productNumber = scanner.nextInt();

            if (productNumber == 0) {
                break;
            }

            System.out.print("Enter quantity sold: ");
            int quantity = scanner.nextInt();

            double price = 0.0;

            switch (productNumber) {
                case 1:
                    price = 22.50;
                    break;
                case 2:
                    price = 44.50;
                    break;
                case 3:
                    price = 9.98;
                    break;
                default:
                    System.out.println("Invalid product number. Please enter 1, 2, or 3.");
                    continue; 
            }

            double productTotal = price * quantity;
            totalRetailValue += productTotal;

            System.out.printf("Added ₹%.2f to total.%n", productTotal);
        }
        
        System.out.printf("Total retail value of all products sold: ₹%.2f%n", totalRetailValue);
        scanner.close();
        
	}

}
