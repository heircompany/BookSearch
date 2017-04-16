// const add = (a, b) => a+b;
// const multiply = (a, b) => a*b;
//
// export {add, multiply};
// export default multiply;

class Calculator {
    static multiply(a, b) {
        return a*b;
    }
    static add(a, b) {
        return a+b;
    }
}
let a = Calculator.multiply(5,7);
console.log(a);
let b = Calculator.add(5,7);
console.log(b);
