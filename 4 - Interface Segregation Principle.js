// Interface Segregation Principle
// Принцип разделения интерфейсов

class Animal {
    constructor(name){
        this.name = name
    }
}

const swimmer = {
    swim(){
        return `${this.name} can swim`
    }
}

const walker = {
    walk(){
        return `${this.name} can walk`
    }
}

const flier = {
    fly(){
        return `${this.name} can fly`
    }
}

class Dog extends Animal{}
class Eagle extends Animal{}
class Whale extends Animal{}

Object.assign(Dog.prototype, walker, swimmer)
Object.assign(Eagle.prototype, flier, walker)
Object.assign(Whale.prototype, swimmer)

const dog = new Dog('Reks')
const eagle = new Eagle('Eagle')
const whale = new Whale('Big blue whale')


console.log(dog.walk())
console.log(dog.swim())
// console.log(dog.fly())

console.log(eagle.walk())
// console.log(eagle.swim())
console.log(eagle.fly())

// console.log(whale.walk())
console.log(whale.swim())
// console.log(whale.fly())