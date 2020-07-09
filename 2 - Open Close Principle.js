// Open / Close Principle
// Принцип открытости / закрытости

class shape {
    area(){
        throw new Error('Area method should be created')
    }
}

class Square extends shape {
    constructor( size ){
        super()
        this.size = size
    }

    area() {
        return this.size ** 2
    }
}

class Circle extends shape{
    constructor( radius ){
        super()
        this.radius = radius
    }
    area() {
        return (this.radius ** 2 ) * Math.PI
    }
}

class Triangle extends shape {
    constructor( a, b ,c ){
        super()
        this.a = a
        this.b = b
        this.c = c
    }

    area() {
        const p = (this.a + this.b + this.c) / 2
        return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))
    }
}

class AreaShapes {
    constructor( shapes = [] ){
        this.shapes = shapes
    }
    sumAreas(){
        return this.shapes.reduce((accum, shape) => {
            accum += shape.area()
            return accum
        }, 0)
    }
}

const areas = new AreaShapes( [
    new Circle(15),
    new Triangle( 12, 11, 5),
    new Square( 18),
    // new Triangle( 7, 15,17)
] )

console.log(areas.sumAreas())