package Assess;

import java.util.HashMap;
import java.util.Map;

public class CountOccurrences {
    public static void main(String[] args) {
        int[] arr = {5, 2, 8, 5, 6, 8, 2, 5, 1, 8};

        Map<Integer, Integer> countMap = new HashMap<>();

        for (int num : arr) {
            countMap.put(num, countMap.getOrDefault(num, 0) + 1);
        }

        System.out.println("Element\tOccurrences");
        for (Map.Entry<Integer, Integer> entry : countMap.entrySet()) {
            System.out.println(entry.getKey() + "\t" + entry.getValue());
        }
    }
}
