package test;

import java.util.InputMismatchException;
import java.util.Scanner;

public class ExceptionDemo {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        try {
            
            System.out.print("Enter an integer: ");
            int number = scanner.nextInt(); 
            System.out.println("You entered: " + number);

            scanner.nextLine();

            
            System.out.print("Enter a string: ");
            String input = scanner.nextLine();

            System.out.print("Enter an index to access: ");
            int index = scanner.nextInt();

            char ch = input.charAt(index);  
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

