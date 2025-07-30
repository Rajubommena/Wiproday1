package assess;

import java.util.ArrayList;
import java.util.List;

public class GenericLibrary<T> {
    private List<T> items = new ArrayList<>();

    public void add(T item) {
        items.add(item);
    }

    public T retrieve(int index) {
        return items.get(index);
    }

    public void displayAll() {
        for (T item : items) {
            System.out.println(item);
        }
    }
}

