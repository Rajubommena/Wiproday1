package Assess;

public class Arith {

	public static void main(String[] args) {
		        // Step 1: Start with the number 2345
		        int number = 2345;

		        // Step 2: Add 8 to the number
		        number = number + 8; // now number = 2353

		        // Step 3: Divide the result by 3
		        int quotient = number / 3; // quotient = 2353 / 3 = 784

		        // Step 4: Take modulus of the quotient with 5
		        int remainder = quotient % 5; // remainder = 784 % 5 = 4

		        // Step 5: Multiply the result by 5
		        int finalResult = remainder * 5; // finalResult = 4 * 5 = 20

		        // Step 6: Display the final result
		        System.out.println("Final Result: " + finalResult);
		    }
	}
