let call = () => {
    let secret = 'es6 rocks';
    let reveal = () => {
        console.log(secret);
    }
    return reveal;
}
let unveil = call();
unveil();

// function factory
const addSuffix = (x) => {
    const concat = (y) => {
        return y + x;
    }
    return concat;
}

let add_ness = addSuffix("ness");
console.log(add_ness);
let h = add_ness("happi");
console.log(h);

let add_ful = addSuffix("ful");
let f = add_ful("fruit");
console.log(f);

// const product = (x) => {
//     return y => {
//         return x*y
//     }
// }
const product = x => y => x*y;
let mult5 = product(5);
console.log(mult5(3));

let double = product(2);
console.log(double(9));

const addFactory = (x) => {
  return (y) => {
    return x + y;
  };
};
const add50 = addFactory(50);
const add30 = addFactory(30);

const budget = () => {
    let balance = 0;
    let changeBal = (val) => {
        return balance += val;
    }
    const deposit20 = () => changeBal(20);
    const withdraw20 = () => changeBal(-20);
    const check = () => balance;
    return {
        deposit20,
        withdraw20,
        check
    }
}

let wallet = budget();
console.log(wallet);
wallet.deposit20();
console.log(wallet.check());
wallet.withdraw20();
wallet.deposit20();
wallet.deposit20();
wallet.deposit20();
wallet.withdraw20();
console.log(wallet.check());
