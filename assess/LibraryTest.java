package assess;

public class LibraryTest {
    public static void main(String[] args) {

        // 🔹 Generic Library for Books
        GenericLibrary<Book> bookLibrary = new GenericLibrary<>();
        bookLibrary.add(new Book("Java Programming"));
        bookLibrary.add(new Book("Data Structures"));
        System.out.println("Generic Book Library:");
        bookLibrary.displayAll();

        // 🔹 Generic Library for Videos
        GenericLibrary<Video> videoLibrary = new GenericLibrary<>();
        videoLibrary.add(new Video("Java Tutorial"));
        System.out.println("\nGeneric Video Library:");
        videoLibrary.displayAll();

        // 🔹 Non-Generic Library
        NonGenericLibrary mixedLibrary = new NonGenericLibrary();
        mixedLibrary.add(new Book("C++ Basics"));
        mixedLibrary.add(new Video("Python Tutorial"));
        mixedLibrary.add(new Newspaper("The Times of India"));

        System.out.println("\nNon-Generic Mixed Library:");
        mixedLibrary.displayAll();

        // Demonstrate retrieval
        System.out.println("\nRetrieved from Non-Generic Library:");
        Object item = mixedLibrary.retrieve(1);
        if (item instanceof Video) {
            Video v = (Video) item;
            System.out.println("Retrieved Video: " + v);
        }
    }
}

