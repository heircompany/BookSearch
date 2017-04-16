let a = Math.pow(2, 5);
console.log(a);

let a = 2**5;
console.log(a);

let b = "wonderful".includes("wonder");
console.log(b);

let b = [2, 3, 4, 5, 6].includes(7);
console.log(b);

let obj = {
  a: 'one',
  b: 'two',
  c: 'three'
}

let keys = Object.keys(obj);
console.log(keys);

let values = Object.values(obj);
console.log(values);

let entries = Object.entries(obj);
console.log(entries);

for (let entry of entries) {
  console.log(`key: ${entry[0]} | value: ${entry[1]}`);
}

async function async_one() {
  return "one";
}

async_one().then(response => console.log(response));

async function async_two() {
  throw new Error('Issue with async!');
}
async_two().catch(error => console.log(error));

async function async_two() {
  return "two"
}

async function async_three() {
  const one = await async_one();
  console.log(one);
  const two = await async_two();
  console.log(two);
}
// async_three();

async function async_four() {
  const [res_one, res_two] = await Promise.all([
    async_one(), async_two()
  ])
  console.log(res_one, res_two);
}
async_four();
