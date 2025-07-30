package Assess;
class Worker {
	protected String name;
    protected double salaryRate;

    public Worker(String name, double salaryRate) {
        this.name = name;
        this.salaryRate = salaryRate;
    }

    public double pay(int hours) {
        return 0.0;
    }
}

class DailyWorker extends Worker {
    public DailyWorker(String name, double salaryRate) {
        super(name, salaryRate);
    }

    @Override
    public double pay(int hours) {
        return hours * salaryRate;
    }
}

class SalariedWorker extends Worker {
    public SalariedWorker(String name, double salaryRate) {
        super(name, salaryRate);
    }

    @Override
    public double pay(int hours) {
        return 40 * salaryRate;
    }
}

public class WorkerTest {
    public static void main(String[] args) {
        
        DailyWorker dw = new DailyWorker("Raju", 100);
        SalariedWorker sw = new SalariedWorker("Sneha", 150);

       
        int workedHours = 45;

        System.out.println("Pay Calculation:");
        System.out.println(dw.name + " (Daily Worker): ₹" + dw.pay(workedHours));
        System.out.println(sw.name + " (Salaried Worker): ₹" + sw.pay(workedHours));
    }

}
