package commnds;

import java.io.*;
import java.util.Scanner;

public class EmployeeSerializeDemo {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String filename = "employee.ser";

        try {
            // Input employee details
            System.out.print("Enter Employee ID: ");
            int id = scanner.nextInt();
            scanner.nextLine(); // consume newline

            System.out.print("Enter Employee Name: ");
            String name = scanner.nextLine();

            System.out.print("Enter Employee Salary: ");
            double salary = scanner.nextDouble();

            // Create Employee object
            Employe emp = new Employe(id, name, salary);

            // Serialize the object
            ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream(filename));
            oos.writeObject(emp);
            oos.close();
            System.out.println("\nEmployee object serialized successfully.\n");

            // Deserialize the object
            ObjectInputStream ois = new ObjectInputStream(new FileInputStream(filename));
            Employe deserializedEmp = (Employe) ois.readObject();
            ois.close();

            System.out.println("Deserialized Employee object:");
            deserializedEmp.display();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}


/*
 Enter Employee ID: 32
Enter Employee Name: raju
Enter Employee Salary: 30000

Employee object serialized successfully.

Deserialized Employee object:
Employee ID   : 32
Employee Name : raju
Employee Salary (transient): 0.0

*/
