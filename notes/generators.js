function* letterMaker() {
  yield 'a';
  yield 'b';
  yield 'c';
}

let letterGen = letterMaker();
console.log(letterGen.next().value);
console.log(letterGen.next().value);
console.log(letterGen.next().value);

function* countMaker() {
  let count = 0;
  while (count < 3) {
    yield count += 1;
  }
}

let countGen = countMaker();
console.log(countGen.next().value);
console.log(countGen.next().value);
console.log(countGen.next().value);
console.log(countGen.next().value); // undefined

function* evens() {
  let count = 0;
  while(true) {
    count += 2;
    yield count;
  }
}

let sequence = evens();
console.log(sequence.next().value);
console.log(sequence.next().value);

function* evens() {
  let count = 0;
  while(true) {
    count += 2;
    var reset = yield count;
    if (reset) {
      count = 0;
    }
  }
}

let sequence = evens();
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next(true).value);
console.log(sequence.next().value);

// part 1:
const arrayIterator = (array) => {
  let index = 0;

  return {
    next: () => {
      if (index < array.length) {
        let next = array[index];
        index += 1;
        return next;
      }
    }
  }
}

var it = arrayIterator([1, 2, 3]);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

function* arrayIterator() {
  yield arguments;
}

var it = arrayIterator(1, 2, 3);
console.log(it.next().value);

function* arrayIterator() {
  for (let arg of arguments) {
    yield arg
  }
}

var it = arrayIterator(1, 2, 3);

function* arrayIterator() {
  yield* arguments;
}

var it = arrayIterator(1, 2, 3);

var array = [1, 2, 3];
var it = arrayIterator(...array);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
