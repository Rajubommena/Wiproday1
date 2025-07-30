package test;

import java.util.Scanner;
public class BikerRace {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int[] speeds = new int[5];
        int sum = 0;

        System.out.println("Enter the speed of 5 bikers:");
        for (int i = 0; i < 5; i++) {
            System.out.print("Biker " + (i + 1) + " speed: ");
            speeds[i] = scanner.nextInt();
            sum += speeds[i];
        }

        double average = sum / 5.0;
        System.out.println("\nAverage speed: " + average);

        System.out.println("Bikers who qualified (speed > average):");
        boolean found = false;
        for (int i = 0; i < 5; i++) {
            if (speeds[i] > average) {
                System.out.println("Biker " + (i + 1) + ": " + speeds[i] + " km/h");
                found = true;
            }
        }

        if (!found) {
            System.out.println("No biker qualified.");
        }

        scanner.close();
    }
}

