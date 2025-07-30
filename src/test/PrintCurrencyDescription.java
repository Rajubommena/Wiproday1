package test;

enum Currency {
    ONE_HUNDRED, TWO_HUNDRED, FIVE_HUNDRED, TWO_THOUSAND, FIFTY, TEN
}

public class PrintCurrencyDescription  {
    public static void main(String[] args) {
        
        for (Currency note : Currency.values()) {
            System.out.print(note + ": ");
            printCurrencyDescription(note);
        }
    }

    public static void printCurrencyDescription(Currency currency) {
        switch (currency) {
            case ONE_HUNDRED:
                System.out.println("Rs.100 - Mostly green in color, used commonly.");
                break;
            case TWO_HUNDRED:
                System.out.println("Rs.200 - Orange colored, medium denomination.");
                break;
            case FIVE_HUNDRED:
                System.out.println("Rs.500 - Gray in color, widely circulated.");
                break;
            case TWO_THOUSAND:
                System.out.println("Rs.2000 - Pink color, high-value note.");
                break;
            case FIFTY:
                System.out.println("Rs.50 - Blue colored, small denomination.");
                break;
            case TEN:
                System.out.println("Rs.10 - Brown or orange, used very frequently.");
                break;
            default:
                System.out.println("Unknown currency");
        }
    }
}

