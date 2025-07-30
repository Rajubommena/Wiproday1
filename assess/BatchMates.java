package assess;

import java.io.*;
import java.util.Scanner;

public class BatchMates {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String filename = "batchmates.txt";

        try {
            // 1. Write batchmates to file
            FileWriter writer = new FileWriter(filename);
            
            System.out.print("Enter number of batch mates: ");
            int n = scanner.nextInt();
            scanner.nextLine(); // consume newline

            for (int i = 1; i <= n; i++) {
                System.out.print("Enter name of batch mate " + i + ": ");
                String name = scanner.nextLine();
                writer.write(name + "\n");
            }
            writer.close();
            System.out.println("Names written to file successfully.\n");

            // 2. Read and display from file
            System.out.println("Reading names from file:");
            BufferedReader reader = new BufferedReader(new FileReader(filename));
            String line;
            int count = 1;
            while ((line = reader.readLine()) != null) {
                System.out.println(count + ". " + line);
                count++;
            }
            reader.close();

        } catch (IOException e) {
            System.out.println("An error occurred: " + e.getMessage());
            scanner.close();
        }
    }
}


/*
 Enter number of batch mates: 2
Enter name of batch mate 1: Raju
Enter name of batch mate 2: Akhi
Names written to file successfully.

Reading names from file:
1. Raju
2. Akhi

 */


