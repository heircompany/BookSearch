// let a = new Map();
// let key_1 = "string key";
// let key_2 = {a: 'key'};
// let key_3 = function() {};
// a.set(key_1, "return value for a string key");
// a.set(key_2, "return value for an object key");
// a.set(key_3, "return value for a function key");
// console.log(a);
//
// let numArr = [[1, 'one'], [2, 'two'], [3, 'three']];
// let valMap = new Map(numArr);
// for (let [key, value] of valMap.entries()) {
//     console.log(`${key} points to ${value}`);
// }

let string = 'lgkhlkahfvlkncm.aflkjwvnlk;apkkbnja';
let letters = new Map();
for(let i=0; i<string.length; i++) {
    let letter = string[i];
    if (!letters.has(letter)) {
        letters.set(letter, 1);
    } else {
        letters.set(letter, letters.get(letter) + 1);
    }
}
console.log(letters);

let string2 = 'supercalifragilisticexpialidocious';
const countLetter = (word, orig_letter) => {
  let letters = new Map();
  for (let i=0; i<word.length; i++) {
    let letter = word[i];
    if (!letters.has(letter)) {
      letters.set(letter, 1);
    } else {
      letters.set(letter, letters.get(letter) + 1);
    }
  }
  return letters.get(orig_letter);
};
let a_count = countLetter(string2, 'a');
let x_count = countLetter(string2, 'x');

console.log(`found a ${a_count} times`);
console.log(`found x ${x_count} times`);
