class Person {
    constructor(nome) {
        this.nome = nome;
    }
    greet() {
        console.log(`Hello ${this.nome}`);
    }
}

class Student extends Person {
    constructor(nome, level) {
        super(nome);
        this.level = level;
    }
    greet() {
        console.log(`Hello ${this.nome} from ${this.level}`)
    }
}

const o1 = new Person("Max");
const o2 = new Student("Tina", "1st Grade");
const o3 = new Student("Mary", "2st Grade");

o3.greet = () => console.log("I am special");

o1.greet();
o2.greet();
o3.greet();