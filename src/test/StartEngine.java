package test;

abstract class Vehicle {
 abstract void startEngine();

 abstract void stopEngine();
}

class Car extends Vehicle {
 @Override
 void startEngine() {
     System.out.println("Car engine started with a key ignition.");
 }

 @Override
 void stopEngine() {
     System.out.println("Car engine stopped using key ignition.");
 }
}

class Motorcycle extends Vehicle {
 @Override
 void startEngine() {
     System.out.println("Motorcycle engine started with a kick or electric start.");
 }

 @Override
 void stopEngine() {
     System.out.println("Motorcycle engine stopped by turning off the kill switch.");
 }
}

public class StartEngine {
 public static void main(String[] args) {
     Vehicle myCar = new Car();
     Vehicle myBike = new Motorcycle();

     
     System.out.println("Car:");
     myCar.startEngine();
     myCar.stopEngine();

     System.out.println("\nMotorcycle:");
     myBike.startEngine();
     myBike.stopEngine();
 }
}

