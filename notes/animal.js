class Animal {
    constructor(name, height) {
        this.name = name;
        this.height = height;
    }
    hello() {
        console.log(`I am called ${this.name}`);
    }
}
let king = new Animal('Mufasa', 4.5);
king.hello();

// export default Animal;
//
// import Animal from './animal';
class Lion extends Animal {
    constructor(name, height, color) {
        super(name, height);
        this.color = color;
    }
    hello() {
        console.log(`Hey, I'm ${this.name} from Pride Rock!`);
    }
}
let son = new Lion('Simba', 2, "gold");
console.log(son);
son.hello();
