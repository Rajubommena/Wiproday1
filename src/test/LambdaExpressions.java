package test;

//import java.util.function.IntPredicate;

@FunctionalInterface
interface PerformOperation {
    boolean check(int a);
}

public class LambdaExpressions {

    public static PerformOperation isOdd() {
        return (int a) -> a % 2 != 0;
    }

    public static PerformOperation isPrime() {
        return (int a) -> {
            if (a <= 1) return false;
            for (int i = 2; i <= Math.sqrt(a); i++) {
                if (a % i == 0) return false;
            }
            return true;
        };
    }

    public static PerformOperation isPalindrome() {
        return (int a) -> {
            String str = Integer.toString(a);
            int len = str.length();
            for (int i = 0; i < len / 2; i++) {
                if (str.charAt(i) != str.charAt(len - 1 - i)) return false;
            }
            return true;
        };
    }

    
    public static boolean checker(PerformOperation op, int num) {
        return op.check(num);
    }

    public static void main(String[] args) {
        
        System.out.println("Is 5 odd? " + checker(isOdd(), 5)); // true
        System.out.println("Is 4 odd? " + checker(isOdd(), 4)); // false

       
        System.out.println("Is 7 prime? " + checker(isPrime(), 7)); // true
        System.out.println("Is 10 prime? " + checker(isPrime(), 10)); // false

        
        System.out.println("Is 121 a palindrome? " + checker(isPalindrome(), 121)); // true
        System.out.println("Is 123 a palindrome? " + checker(isPalindrome(), 123)); // false
    }
}

