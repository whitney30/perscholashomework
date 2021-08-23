//Define a new class circle with appropriate attributes and instantiatea few circle objects.
// 1. Write a function called circle area that returns the area of the object.
// 2. Write a function radius that returns the radius of the object.
class circle {
    constructor(radius, area) {
        this.radius = radius
        this.area = area;

    }
    
    circle_diameter = () => 2 * this.radius * this.area;
    circle_circumference = () => 2 * 3.14 * this.radius * this.area;
}

//Define a new class called Rectangle with appropriate attributes and instantiate a few rectangles objects.
// 1. Write a function called rectangle_area that returns the area of the given object.
// 2. Write a function total_sides that returns the number of sides of the object.
class Rectangle {
    constructor(length, width); {
        this.length = length;
        this.width = width;
    }
    
    rectangle_area = () => this.length * this.width;
    rectangle_sides = () => this.length + this.width;


    

}

//Define a new class called Square with appropriate attributes and instantiate a few Square objects.
// 1. Write a function called square_area that returns the area of the given object.
// 2. Write a function total_sides that returns the number of sides of the object.
class Square {
    constructor (length, width); {
        this.length = length;
        this.width = width;
    }
    Square_area = () => this.length * this.width;
    Square_sides = () => this.length + this.width;
}
<!Doctype html>
<head>
    <h1>circle, rectangle, square<h1/>
</head>