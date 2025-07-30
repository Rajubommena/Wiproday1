package Assess;
import java.util.Scanner;
public class BonusCalculator {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

       
        System.out.print("Enter your salary: ");
        double salary = scanner.nextDouble();

        System.out.print("Enter your years of service: ");
        int yearsOfService = scanner.nextInt();

       
        double bonus = 0;

        if (yearsOfService > 6) {
            bonus = salary * 0.10;  // Calculate 10% bonus
            System.out.println("Congratulations! You are eligible for a bonus of: ₹" + bonus);
        } else {
            System.out.println("Sorry, you are not eligible for a bonus.");
        }
        scanner.close();

	}
	

}
