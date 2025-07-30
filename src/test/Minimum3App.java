package test;

import java.util.Scanner;
import java.util.function.BinaryOperator;

@FunctionalInterface
interface MinFinder {
    float minimum3(float a, float b, float c);
}

public class Minimum3App {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter first float value: ");
        float a = scanner.nextFloat();

        System.out.print("Enter second float value: ");
        float b = scanner.nextFloat();

        System.out.print("Enter third float value: ");
        float c = scanner.nextFloat();

        BinaryOperator<Float> min2 = Math::min;

        MinFinder min3 = (x, y, z) -> min2.apply(min2.apply(x, y), z);

        float result = min3.minimum3(a, b, c);

        System.out.println("The smallest value is: " + result);
        scanner.close();
    }
}
