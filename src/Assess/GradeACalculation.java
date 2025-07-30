package Assess;

public class GradeACalculation {

	public static void main(String[] args) {
		
        int totalStudents = 90;

        int totalBoys = 45;

        int gradeAStudents = totalStudents * 50 / 100; 

        int gradeABoys = 20;

        int gradeAGirls = gradeAStudents - gradeABoys;

        System.out.println("Number of girls who got grade A: " + gradeAGirls);

	}

}
