package test;

abstract class Person {

 abstract void eat();
 abstract void exercise();
}

class Athlete extends Person {
 @Override
 void eat() {
     System.out.println("Athlete eats a high-protein, balanced diet.");
 }

 @Override
 void exercise() {
     System.out.println("Athlete exercises rigorously every day.");
 }
}

class LazyPerson extends Person {
 @Override
 void eat() {
     System.out.println("Lazy person eats junk food while watching TV.");
 }

 @Override
 void exercise() {
     System.out.println("Lazy person avoids exercise and prefers sleeping.");
 }
}

public class Exerice {
 public static void main(String[] args) {
     Person athlete = new Athlete();
     Person lazy = new LazyPerson();

    
     System.out.println("Athlete:");
     athlete.eat();
     athlete.exercise();

     
     System.out.println("\nLazy Person:");
     lazy.eat();
     lazy.exercise();
 }
}
