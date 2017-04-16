let a = new Set();
a.add(5);
a.add(43);
a.add('woot');
a.add({x: 50, y: 200});
console.log(a);
console.log(a.size);
console.log(a.has(5));
console.log(a.has(7));

let numbers = [5,7,8,13,17];
let numSet = new Set(numbers);
console.log(numSet);

for (let element of numSet.values()) {
    console.log(element);
}

let chars = 'r8j-c01cuoifhilhkehjfgbkusifhqjhyfu'
let chars_arr = chars.split("");
let chars_set = new Set(chars_arr);
console.log(chars_set);

const contains = (word, letter) => {
  let letters = word.split("");
  let letter_set = new Set(letters);
  return letter_set.has(letter);
};
let true_check = contains("west", "e");
let false_check = contains("north", "e");
