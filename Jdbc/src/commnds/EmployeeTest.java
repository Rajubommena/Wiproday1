package commnds;

import java.util.Scanner;

public class EmployeeTest {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter Employee Name: ");
        String name = scanner.nextLine();

        System.out.print("Enter Year of Birth: ");
        int yearOfBirth = scanner.nextInt();
        scanner.nextLine(); // consume newline

        System.out.print("Enter Employee ID (format YY-D-NNN): ");
        String empId = scanner.nextLine();

        Employee emp = new Employee(empId, name, yearOfBirth);
        emp.printDetails();
        scanner.close();
    }
}

/*
 Enter Employee Name: Raju
Enter Year of Birth: 2003
Enter Employee ID (format YY-D-NNN): 03-F-26
Employee Name: Raju
Year of Birth: 2003
Employee ID: 03-F-26
Parsed Details:
  Joining Year: 03
  Designation : Faculty
  Serial No   : 26
  */
