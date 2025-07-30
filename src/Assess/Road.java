package Assess;


class Vehicle {
    String color;
    int noOfWheels;
    String model;

    public Vehicle(String color, int noOfWheels, String model) {
        this.color = color;
        this.noOfWheels = noOfWheels;
        this.model = model;
    }

    public void start() {
        System.out.println(model + " is starting...");
    }

    public void stop() {
        System.out.println(model + " is stopping...");
    }

    public void displayDetails() {
        System.out.println("Model: " + model);
        System.out.println("Color: " + color);
        System.out.println("Number of Wheels: " + noOfWheels);
    }
}

class Truck extends Vehicle {
    public Truck(String color, int noOfWheels, String model) {
        super(color, noOfWheels, model);
    }

    public void loadGoods() {
        System.out.println("Truck is loading goods...");
    }
}

class Car extends Vehicle {
    public Car(String color, int noOfWheels, String model) {
        super(color, noOfWheels, model);
    }

    public void playMusic() {
        System.out.println("Car is playing music...");
    }
}

class Bus extends Vehicle {
    public Bus(String color, int noOfWheels, String model) {
        super(color, noOfWheels, model);
    }

    
    public void pickPassengers() {
        System.out.println("Bus is picking up passengers...");
    }
}

public class Road {
    public static void main(String[] args) {
        
        Truck truck = new Truck("Blue", 6, "Volvo Truck");
        truck.start();
        truck.displayDetails();
        truck.loadGoods();
        truck.stop();
        System.out.println();

       
        Car car = new Car("Red", 4, "Hyundai i20");
        car.start();
        car.displayDetails();
        car.playMusic();
        car.stop();
        System.out.println();

        
        Bus bus = new Bus("Yellow", 8, "Tata Bus");
        bus.start();
        bus.displayDetails();
        bus.pickPassengers();
        bus.stop();
    }
}
