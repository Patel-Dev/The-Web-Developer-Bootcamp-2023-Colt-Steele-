class Pet {
    constructor(name, age) {
        console.log("IN PET CONSTRUCTOR")
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating!`;
    }
}

class Cat extends Pet {
    constructor(name, age, livesLeft = 9) {
        console.log("IN CAT CONSTRUCTOR");
        super(name, age);
        this.livesLeft = livesLeft;
    }
    meow() {
        return "MEOW";
    }
}

class Dog extends Pet {
    bark() {
        return "WOOF!";
    }
    eat() {
        return `${this.name} is scarfing his food!`;
    }
}

const midnight = new Cat("midnight", 5, 9);
const cooper = new Dog("cooper", 3, 1);