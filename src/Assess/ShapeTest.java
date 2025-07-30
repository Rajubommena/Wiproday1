package Assess;

class Shape {

    public double area(double side) {
        return side * side;
    }

    public double area(double length, double breadth) {
        return length * breadth;
    }

    public double perimeter(double side) {
        return 4 * side;
    }

    public double perimeter(double length, double breadth) {
        return 2 * (length + breadth);
    }
}

public class ShapeTest {
    public static void main(String[] args) {
        Shape shape = new Shape();

        double squareSide = 5;
        double rectLength = 8;
        double rectBreadth = 4;

        
        System.out.println("Area of square: " + shape.area(squareSide));
        System.out.println("Area of rectangle: " + shape.area(rectLength, rectBreadth));

        
        System.out.println("Perimeter of square: " + shape.perimeter(squareSide));
        System.out.println("Perimeter of rectangle: " + shape.perimeter(rectLength, rectBreadth));
    }
}
