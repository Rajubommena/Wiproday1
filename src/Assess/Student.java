package Assess;

public class Student {

	private static int nextRollNo = 1;

    private int rollNo;
    private String studName;
    private int marksInEng;
    private int marksInMaths;
    private int marksInScience;

    public Student(String studName, int eng, int maths, int science) {
        this.rollNo = nextRollNo++; // Auto-generate roll number
        this.studName = studName;
        this.marksInEng = eng;
        this.marksInMaths = maths;
        this.marksInScience = science;
    }

    public int getRollNo() {
        return rollNo;
    }

    public String getStudName() {
        return studName;
    }

    public int getMarksInEng() {
        return marksInEng;
    }

    public int getMarksInMaths() {
        return marksInMaths;
    }

    public int getMarksInScience() {
        return marksInScience;
    }

    public void setStudName(String studName) {
        this.studName = studName;
    }

    public void setMarksInEng(int marksInEng) {
        this.marksInEng = marksInEng;
    }

    public void setMarksInMaths(int marksInMaths) {
        this.marksInMaths = marksInMaths;
    }

    public void setMarksInScience(int marksInScience) {
        this.marksInScience = marksInScience;
    }

    public void displayStudentInfo() {
        System.out.println("Roll No: " + rollNo);
        System.out.println("Name: " + studName);
        System.out.println("English Marks: " + marksInEng);
        System.out.println("Maths Marks: " + marksInMaths);
        System.out.println("Science Marks: " + marksInScience);
        System.out.println("-------------------------------");
    }

    public static void main(String[] args) {
        
        Student s1 = new Student("Raju", 85, 90, 88);
        Student s2 = new Student("Sneha", 78, 82, 91);

        
        s1.displayStudentInfo();
        s2.displayStudentInfo();
    }

}
