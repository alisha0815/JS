// Challenge 1
function LongestWord(sen) {
  // separate word, split(" ")
  const longest = sen
    .split(' ')
    .map((word) => word.replace(/[^a-z]/g, ''))
    .sort((a, b) => b.length - a.length)[0];
  return longest;
}

console.log(LongestWord('fun&!! time jkjkjljljlj'));

// Challenge 2
function pickIt(arr) {
  const odd = [],
    even = [];
  //coding here
  arr.map((num) => (num % 2 === 0 ? even.push(num) : odd.push(num)));

  return [odd, even];
}

const array = [4, 6, 8, 9, 10, 3, 6, 7];
console.log(pickIt(array));

// Challenge 3
const howManydays = function (month) {
  switch (month) {
    case 2:
      return 28;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    default:
      return 31;
  }
};

console.log(howManydays(5));

// Challenge 4
// Coding in function giveMeFive, function accept 1 parameter:obj, it's an object.
// You need to the traverse the obj, if the length of the object key equals to 5, then push the key value to the array (you need to define the array by yourself, this time I won't help you). Additionally push the value to the array as well, if the length of the value is equal to 5.

const giveMeFive = function (obj) {
  const five = [];
  const objToArr = Object.entries(obj)
    .filter((str) => str[1].length === 5)
    .map((str) => five.push(str[0]));
  return five;
};

const five = [];

// Testing
const obj = { Ihave: 'enough', money: 'to', buy: 'a', car: 'model' };
console.log(giveMeFive(obj));

// Challenge 4-2
const giveMeFive = function (obj) {
  return Object.entries(obj)
    .flat()
    .filter((str) => str.length === 5);
};

// Testing
const obj = { Ihave: 'enough', money: 'to', buy: 'a', car: 'model' };
console.log(giveMeFive(obj));
console.log(giveMeFive({ Pears: 'than', apple: 'sweet' }));
console.log(giveMeFive({ Our: 'earth', is: 'a', beautyful: 'world' }));

// challenge 4-3
const giveMeFive = function (obj) {
  const five = [];
  for (const [key, value] of Object.entries(obj)) {
    // console.log(key, value)
    value.length === 5 ? five.push(value) : '';
  }
  return five;
};

//Testing
console.log(giveMeFive({ Pears: 'than', apple: 'sweet' }));
console.log(giveMeFive({ Our: 'earth', is: 'a', beautyful: 'world' }));

// Challenge 5
const cutIt = function (arr) {
  // find shortest
  const shortest = arr.reduce((a, b) => (a.length <= b.length ? a : b));
  // return the array of same string length
  return arr.map((str) => str.slice(0, shortest.length));
};

// shorted length
const shortest = arr.sort()[0];
Math.min(...arr.map((str) => str.length));

// challenge 6
const firstToLast = function (str, c) {
  const first = str.indexOf(c);
  const last = str.lastIndexOf(c);
  return !str.includes(c) ? -1 : last - first;
};
