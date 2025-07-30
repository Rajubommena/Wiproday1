package commnds;

import java.io.Serializable;

public class Employe implements Serializable {
    private int emp_id;
    private String emp_name;
    private transient double emp_sal; // will not be serialized

    public Employe(int emp_id, String emp_name, double emp_sal) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_sal = emp_sal;
    }

    public void display() {
        System.out.println("Employee ID   : " + emp_id);
        System.out.println("Employee Name : " + emp_name);
        System.out.println("Employee Salary (transient): " + emp_sal);
    }
}
