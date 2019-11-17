package Circle;

public class TestCircle {
    public static void main(String[] args) {
        Circle c1 = new Circle(1.0);
        System.out.println("Радиус = " + c1.getRadius());
        System.out.println("Площадь = " + c1.getArea());
        System.out.println("Длина окружности = " + c1.getCircumference());
        Cilinder l1 = new Cilinder(1.0, 1.0);
        System.out.println(l1);
        System.out.println("Площать цилиндра =" + l1.getArea());
        System.out.println("Радиус цилиндра = " + l1.getRadius());
        System.out.println("Объем цилиндра = " + l1.getVolume());
    }
}
