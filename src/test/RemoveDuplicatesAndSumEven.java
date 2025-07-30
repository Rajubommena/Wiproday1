package test;

import java.util.*;

public class RemoveDuplicatesAndSumEven {
    public static void main(String[] args) {
        
        int[] input = {2, 3, 54, 1, 6, 7, 7};

        Set<Integer> uniqueSet = new HashSet<>();
        for (int num : input) {
            uniqueSet.add(num);
        }

        int sumEven = 0;
        System.out.println("Unique elements: " + uniqueSet);
        for (int num : uniqueSet) {
            if (num % 2 == 0) {
                sumEven += num;
            }
        }

       
        System.out.println("Sum of even numbers: " + sumEven);
    }
}
