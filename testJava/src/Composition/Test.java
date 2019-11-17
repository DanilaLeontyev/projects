package Composition;

public class Test {
    public static void main(String[] args) {
        Author[] authors = new Author[2];
        authors[0] = new Author("Jon", "don@mail.com", Gender.FEMALE);
        authors[1] = new Author("Bob", "bob@mail.com" , Gender.MALE);

        Book b1 = new Book("name of book", authors, 10, 3);
        System.out.println(b1);
    }
}
