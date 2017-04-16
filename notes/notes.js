//functions
var multiply = function(a, b) {
    return a*b;
}
//invoke function to get returned value
var product = multiply(5, 10);
console.log(product);

//objects
// map to real world objects in data
// model in js
var dog = {
    name: 'Buddy',
    breed: 'Golden Retriever',
    weight: 60
    bark: function() {
        console.log('woof');
    }
};
dog.bark();
console.log(dog["breed"]);

//arrays hold multiple variables in one object
var points = [25,16,7,9,31];
points.push(8);
//remove last element in array
var first = points[0];
var last = points.pop();
console.log(points, first, last, points.length);


//booleans and switch keyword
var check = function(number) {
    if(number % 2 === 0) {
        console.log(`${number} is even.`);
    } else {
        console.log(`${number} is odd.`);
    }
}
check(4);

var x = 3;
switch(x) {
    case 1:
        console.log('the number is 1');
        break;
    case 2:
        console.log('the number is 2');
        break;
    case 3:
        console.log('the number is 3');
        break;
    default:
        console.log(`the number is ${x}`);
        break;
}

//loops (all do the same damn thing)
var names = ["Frodo", "Sam", "Merry", "Pippin"];
for (var i=0; i<names.length; i++) {
    console.log(names);
}

do {
    console.log(names[i]);
    i++;
} while (i < names.length);

while (i < names.length)  {
    console.log(names[i]);
    i++;
}

function count(x) {
  var numbers = [];
  if (x % 2 === 0) {
    for (var i=0; i<x; i += 2) {
      numbers.push(i);
    }
  } else {
    for (var i=1; i<x; i += 2) {
      numbers.push(i);
    }
  }
  return numbers;
}

const emails = ["frodo@gmail.com", "samwise@gmail.com", "merry@gmail.com"]
emails.push("pippin@gmail.com");
console.log(emails);

const limit = 200;
{
    let limit = 10;
    console.log(`backstage limit: ${limit}`);
}
console.log(`venue limit: ${limit}`);

function hello() {
    let message = 'HELLO';
    console.log(message);
}
function greeting() {
    let message = 'HOW GOES IT';
    console.log(message);
}

hello();
greeting();

let a = [20, 30, 40];
let b = [10, ...a, 50];
console.log(b);

let c = ['dana', 'erik', 'frank'];
let d = ['alice', 'bob', 'carl', ...c];
console.log(d);

let z = [4,5,6];
let [four, five] = z;
console.log(four, five);

let animals = ['simba', 'zazu', 'ed'];
let [lion, bird] = animals;
console.log(lion, bird);

let king = {
    name: 'mufasa',
    kids: 1
};
let {name, kids} = king;
console.log(name, kids);

let son = {
    name: 'simba',
    parents: 2
}
let name, parents;
({name, parents} = son);
console.log(name, parents)

let cheer = () => {
    console.log('woot')
}
cheer();

let values = [20, 30, 40];

let doubled = values.map((n) => n*2);
console.log(doubled);

let points = [7, 16, 21, 4, 3, 22, 5];
let highScores = points.filter((n) => n>15);
console.log(highScores);

let b = `wooh${"oo".repeat(50)}`;
console.log(b);

console.log("butterfly".startsWith("butter"));
console.log("butterfly".endsWith("fly"));
console.log("butterfly".includes("utte"));

const addToCart = (item, number) => {
    return Number.isFinite(number);
}
console.log(addToCart('shirt', Math.pow(2, 54)));

const addToCart2 = (item, number) => {
    return Number.isSafeInteger(number);
}
console.log(addToCart2('shirt', Math.pow(2, 54)));

import {fellowship, total} from './fellowship';
console.log(fellowship, total);

import multiply from './math';
console.log(multiply(5,10));


class Instrument {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}
class Guitar extends Instrument {
  describe() {
    return `I'm a ${this.name} from the ${this.type} family.`;
  }
}
let fender = new Guitar('Fender', 'strings');

function Vehicle(make, year) {
  this.make = make;
  this.year = year;
}

Vehicle.prototype.color;
Vehicle.prototype.bio = function() {
    return `A ${this.color} ${this.make} made in ${this.year}.`;
}

let s = new Vehicle("Tesla", 2017);
s.color = "black";
s.bio();
