package Assess;
import java.util.Scanner;
public class AverageMarks {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int totalStudents = 3;
        int[] marks = new int[totalStudents];
        int count = 0;

        // Loop for each student
        while (count < totalStudents) {
            System.out.print("Enter the mark (0-100) for student " + (count + 1) + ": ");
            int input = sc.nextInt();

            if (input >= 0 && input <= 100) {
                marks[count] = input;
                count++;
            } else {
                System.out.println("Invalid input, try again...");
            }
        }

        // Compute average
        double sum = 0;
        for (int mark : marks) {
            sum += mark;
        }
        double average = sum / totalStudents;

        // Print average rounded to 2 decimal places
        System.out.printf("The average is: %.2f\n", average);

        sc.close();
    }
}
