package test;
import java.util.NoSuchElementException;
import java.util.Scanner;

public class StudentValidation {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter Register Number: ");
        String regNo = scanner.nextLine();

        System.out.print("Enter Mobile Number: ");
        String mobileNo = scanner.nextLine();

        try {
            
            if (regNo.length() != 9 || mobileNo.length() != 10) {
                throw new IllegalArgumentException("Invalid lengths");
            }

            if (!regNo.matches("[a-zA-Z0-9]+")) {
                throw new NoSuchElementException("Register Number contains invalid characters");
            }

            if (!mobileNo.matches("\\d+")) {
                throw new IllegalArgumentException("Mobile Number must contain digits only");
            }

            System.out.println("valid");

        } catch (IllegalArgumentException | NoSuchElementException e) {
            System.out.println("invalid");
            
        }
        //scanner.close();
    }
}
