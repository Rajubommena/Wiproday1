package test;

public class Tank {
    private boolean isFilled = false;
    private boolean isReleased = false;

    public void fillTank() {
        isFilled = true;
        System.out.println("Tank is filled.");
    }

    public void emptyTank() {
        isFilled = false;
        System.out.println("Tank is emptied.");
    }

    public void releaseTank() {
        isReleased = true;
        System.out.println("Tank is released (cleaned up).");
    }

    @Override
    protected void finalize() throws Throwable {
        if (!isReleased) {
            System.out.println("Warning: Tank was not properly released before garbage collection!");
        } else {
            System.out.println("Tank finalized properly.");
        }
        super.finalize();
    }
}

