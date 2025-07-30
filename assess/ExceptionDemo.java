package assess;

import java.util.InputMismatchException;
import java.util.Scanner;

public class ExceptionDemo {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        try {
            // Demonstrate InputMismatchException
            System.out.print("Enter an integer: ");
            int number = scanner.nextInt();  // If user enters a non-integer, it throws InputMismatchException
            System.out.println("You entered: " + number);

            // Clear the scanner buffer
            scanner.nextLine();

            // Demonstrate StringIndexOutOfBoundsException
            System.out.print("Enter a string: ");
            String input = scanner.nextLine();

            System.out.print("Enter an index to access: ");
            int index = scanner.nextInt();

            char ch = input.charAt(index);  // May throw StringIndexOutOfBoundsException
            System.out.println("Character at index " + index + ": " + ch);

        } catch (InputMismatchException e) {
            System.out.println("Caught InputMismatchException: Please enter a valid integer.");
        } catch (StringIndexOutOfBoundsException e) {
            System.out.println("Caught StringIndexOutOfBoundsException: Invalid index for the given string.");
        } finally {
            System.out.println("Program finished.");
            scanner.close();
        }
    }
}

/*Enter an integer: 10
You entered: 10
Enter a string: Hello
Enter an index to access: 3
Character at index 3: l
Program finished.*/
