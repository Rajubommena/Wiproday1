package assess;

public class Book {
    String title;

    public Book(String title) {
        this.title = title;
    }

    public String toString() {
        return "Book: " + title;
    }
}

public class Video {
    String title;

    public Video(String title) {
        this.title = title;
    }

    public String toString() {
        return "Video: " + title;
    }
}

public class Newspaper {
    String name;

    public Newspaper(String name) {
        this.name = name;
    }

    public String toString() {
        return "Newspaper: " + name;
    }
}

/*
 Generic Book Library:
Book: Java Programming
Book: Data Structures

Generic Video Library:
Video: Java Tutorial

Non-Generic Mixed Library:
Book: C++ Basics
Video: Python Tutorial
Newspaper: The Times of India

Retrieved from Non-Generic Library:
Retrieved Video: Video: Python Tutorial

*/
