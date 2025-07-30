package test;

public class TankTest {
    public static void main(String[] args) {
        System.out.println("----Scenario 1: Proper release----");
        Tank t1 = new Tank();
        t1.fillTank();
        t1.emptyTank();
        t1.releaseTank();
        t1 = null;

        System.out.println("----Scenario 2: Forgot to release----");
        Tank t2 = new Tank();
        t2.fillTank();
        t2 = null;

        
        System.gc();

       
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        System.out.println("End of main.");
    }
}

/*
 * ----Scenario 1: Proper release----
Tank is filled.
Tank is emptied.
Tank is released (cleaned up).
----Scenario 2: Forgot to release----
Tank is filled.
Warning: Tank was not properly released before garbage collection!
Tank finalized properly.
End of main.
*/
