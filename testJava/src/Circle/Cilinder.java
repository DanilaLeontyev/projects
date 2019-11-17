package Circle;

public class Cilinder extends Circle{

    private double height;

    Cilinder() {
        super();
        height = 1.0;
    }

    Cilinder(double height) {
        super();
        this.height = height;
    }

    Cilinder(double radius, double height){
        super(radius);
        this.height = height;
    }

    public double getHeight(){
        return this.height;
    }

    public double getArea() {
        return 2 * Math.PI * height + 2 * super.getArea();
    }

    public double getVolume() {
        return getArea() * height;
    }

    @Override
    public String toString() {
        return "Cylinder: subclass of " + super.toString() + " height=" + height;
    }
}
