package test;
//import java.util.Scanner;
class  Ar{
	int num;
	String name;
	public Ar(int num,String name) {
		super();
		this.num=num;
		this.name=name;
	}
}
public class Array{
	public static void main(String[] args) {
		Ar obj=new Ar(10,"raju");
		System.out.println("name is "+obj.name);
		System.out.println("number is "+obj.num);
		


	
}
}
