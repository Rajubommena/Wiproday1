package commnds;

public class Employee {
    private String empId;
    private String name;
    private int yearOfBirth;

    // Constructor
    public Employee(String empId, String name, int yearOfBirth) {
        this.empId = empId;
        this.name = name;
        this.yearOfBirth = yearOfBirth;
    }

    // Method to display employee details
    public void printDetails() {
        System.out.println("Employee Name: " + name);
        System.out.println("Year of Birth: " + yearOfBirth);
        System.out.println("Employee ID: " + empId);

        // Parse empId format: YY-D-NNN (e.g., 81-F-112)
        String[] parts = empId.split("-");

        if (parts.length == 3) {
            String year = parts[0];
            String designationCode = parts[1];
            String number = parts[2];

            String designation;
            if (designationCode.equalsIgnoreCase("F")) {
                designation = "Faculty";
            } else if (designationCode.equalsIgnoreCase("S")) {
                designation = "Staff";
            } else {
                designation = "Unknown";
            }

            System.out.println("Parsed Details:");
            System.out.println("  Joining Year: " + year);
            System.out.println("  Designation : " + designation);
            System.out.println("  Serial No   : " + number);
        } else {
            System.out.println("Invalid Employee ID format!");
        }
    }
}

