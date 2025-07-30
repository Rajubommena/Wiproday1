package test;

interface Drawable {
 void drawingColor();
 void thickness();
}

interface Fillable {
 void fillingColor();
 void size();
}

class Line implements Drawable {
 public void drawingColor() {
     System.out.println("Line is drawn in black color.");
 }

 public void thickness() {
     System.out.println("Line thickness is 2px.");
 }
}

class Circle implements Drawable, Fillable {
 public void drawingColor() {
     System.out.println("Circle is drawn in blue color.");
 }

 public void thickness() {
     System.out.println("Circle border thickness is 3px.");
 }

 public void fillingColor() {
     System.out.println("Circle is filled with red color.");
 }

 public void size() {
     System.out.println("Circle diameter is 100px.");
 }
}

//Class Square implementing both Drawable and Fillable
class Square implements Drawable, Fillable {
 public void drawingColor() {
     System.out.println("Square is drawn in green color.");
 }

 public void thickness() {
     System.out.println("Square border thickness is 4px.");
 }

 public void fillingColor() {
     System.out.println("Square is filled with yellow color.");
 }

 public void size() {
     System.out.println("Square size is 80x80px.");
 }
}

public class Thickness {
 public static void main(String[] args) {
     
     System.out.println("Line:");
     Line line = new Line();
     line.drawingColor();
     line.thickness();

    
     System.out.println("\nCircle:");
     Circle circle = new Circle();
     circle.drawingColor();
     circle.thickness();
     circle.fillingColor();
     circle.size();

    
     System.out.println("\nSquare:");
     Square square = new Square();
     square.drawingColor();
     square.thickness();
     square.fillingColor();
     square.size();
 }
}

