package assess;

import java.util.ArrayList;
import java.util.List;

public class NonGenericLibrary {
    private List<Object> items = new ArrayList<>();

    public void add(Object item) {
        items.add(item);
    }

    public Object retrieve(int index) {
        return items.get(index);
    }

    public void displayAll() {
        for (Object item : items) {
            System.out.println(item);
        }
    }
}
