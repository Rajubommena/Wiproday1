package assess;

import java.util.Scanner;

public class EmpTest {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        try {
            System.out.print("Enter Emp ID: ");
            int id = scanner.nextInt();
            scanner.nextLine(); // consume newline

            System.out.print("Enter Emp Name: ");
            String name = scanner.nextLine();

            System.out.print("Enter Designation (Manager / TeamLeader / HR): ");
            String desig = scanner.nextLine();

            System.out.print("Enter Basic Salary: ");
            double salary = scanner.nextDouble();

            // Create Emp object
            Emp emp = new Emp(id, name, desig, salary);
            emp.printDET();

        } catch (LowSalException e) {
            System.out.println("LowSalException caught: " + e.getMessage());
        } catch (Exception e) {
            System.out.println("Some other error: " + e.getMessage());
            scanner.close();
        }
    }
}
/*
  Enter Emp ID: 32
Enter Emp Name: Raju
Enter Designation (Manager / TeamLeader / HR): Trainee
Enter Basic Salary: 50000
Employee Details:
Emp ID      : 32
Emp Name    : Raju
Designation : Trainee
Basic       : 50000.0
HRA         : 0.0
*/


