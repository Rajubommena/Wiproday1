package Assess;
import java.util.Scanner;
public class AttendanceCheck {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

        System.out.print("Enter total number of classes held: ");
        int totalClasses = scanner.nextInt();

        System.out.print("Enter number of classes attended: ");
        int attendedClasses = scanner.nextInt();

        if (attendedClasses > totalClasses || totalClasses <= 0 || attendedClasses < 0) {
            System.out.println("Invalid input. Please enter valid numbers.");
        } else {
    
            double attendancePercentage = (attendedClasses * 100.0) / totalClasses;

            
            System.out.println("Attendance Percentage: " + attendancePercentage + "%");

            
            if (attendancePercentage >= 70) {
                System.out.println("The student is allowed to sit in the exam.");
            } else {
                System.out.println("The student is NOT allowed to sit in the exam.");
                scanner.close();
            }
        }


	}

}
