package Circle;

public class Circle {
    private double radius;
    private  String color;

    Circle(){
        radius = 1.0;
        color = "red";
    }

    public  Circle(double radius) {
        this.radius = radius;
        this.color = "red";
    }

    public void setColor(String color) {
        this.color = color;
    }

    public void setRadius(double radius) {
        this.radius = radius;
    }

    double getRadius() {
        return radius;
    }

    double getArea() {
        return Math.PI * radius * radius;
    }

    public  String toString() {
        return "Circle.Circle[radius=" + radius + " color=" + color + "]";
    }

    double getCircumference() {
        return Math.PI * 2 * radius;
    }

}
