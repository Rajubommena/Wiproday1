package commnds;

import java.util.Scanner;

public class EmpCodeValidatorApp {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        try {
            // Input employee details
            System.out.print("Enter Employee Code (Format: E123 or EMP-456): ");
            String code = scanner.nextLine();

            System.out.print("Enter Employee Name: ");
            String name = scanner.nextLine();

            System.out.print("Enter Employee Age: ");
            int age = scanner.nextInt();

            
            if (!code.matches("(E\\d{3})|(EMP-\\d{3})")) {
                throw new InvalidEmployeeCode("Employee code is not in valid format (E123 or EMP-456)");
            }

            // Create and display employee
            Employee1 emp = new Employee1(code, name, age);
            emp.displayDetails();

        } catch (InvalidEmployeeCode e) {
            System.out.println("Error: " + e.getMessage());
        } catch (Exception e) {
            System.out.println("Unexpected error: " + e.getMessage());
        }
    }
}
/*
 Enter Employee Code (Format: E123 or EMP-456): EMP-576
Enter Employee Name: Raju
Enter Employee Age: 23
Employee Details:
Code : EMP-576
Name : Raju
Age  : 23
*/
