package assess;

public class Emp {
    private int empId;
    private String empName;
    private String designation;
    private double basic;
    private double hra; // read-only: no setter

    // Constructor
    public Emp(int empId, String empName, String designation, double basic) throws LowSalException {
        if (basic < 50000) {
            throw new LowSalException("Basic salary must be at least 50000");
        }

        this.empId = empId;
        this.empName = empName;
        this.designation = designation;
        this.basic = basic;

        calculateHRA();
    }

    // Calculate HRA based on designation
    private void calculateHRA() {
        switch (designation) {
            case "Manager":
                hra = basic * 0.10;
                break;
            case "TeamLeader":
                hra = basic * 0.12;
                break;
            case "HR":
                hra = basic * 0.05;
                break;
            default:
                hra = 0; // Or you can throw exception for unsupported designation
        }
    }

    // Print employee details
    public void printDET() {
        System.out.println("Employee Details:");
        System.out.println("Emp ID      : " + empId);
        System.out.println("Emp Name    : " + empName);
        System.out.println("Designation : " + designation);
        System.out.println("Basic       : " + basic);
        System.out.println("HRA         : " + hra);
    }
}

