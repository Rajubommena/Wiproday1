package Assess;

class CalculatorApp {

	
	public void add(double a, double b) {
        double result = a + b;
        System.out.println("Addition: " + result);
    }

    public void diff(double a, double b) {
        double result = a - b;
        System.out.println("Subtraction: " + result);
    }

    public void mul(double a, double b) {
        double result = a * b;
        System.out.println("Multiplication: " + result);
    }

    public void div(double a, double b) {
        if (b != 0) {
            double result = a / b;
            System.out.println("Division: " + result);
        } else {
            System.out.println("Error: Division by zero is not allowed.");
        }
    }
}

public class Calculator {
    public static void main(String[] args) {
        
        CalculatorApp calc = new CalculatorApp();

        double num1 = 20;
        double num2 = 5;

        calc.add(num1, num2);  
        calc.diff(num1, num2); 
        calc.mul(num1, num2);  
        calc.div(num1, num2);  
   
    }
}
