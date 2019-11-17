package Composition;

public class Author {
    private String name;
    private  String email;
    private Gender gender;

    Author(String name, String email, Gender gender) {
        this.email = email;
        this.name = name;
        this.gender = gender;
    }

    public String getName() {
        return name;
    }

    public Gender getGender() {
        return gender;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String toString() {
        return "Author [name = " + this.name + ", email = " + this.email + ", gender = " + this.gender + "]";
    }
}
