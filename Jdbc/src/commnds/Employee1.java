package commnds;

public class Employee1 {
    private String empCode;
    private String name;
    private int age;

    public Employee1(String empCode, String name, int age) {
        this.empCode = empCode;
        this.name = name;
        this.age = age;
    }

    public void displayDetails() {
        System.out.println("Employee Details:");
        System.out.println("Code : " + empCode);
        System.out.println("Name : " + name);
        System.out.println("Age  : " + age);
    }
}

