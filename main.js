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

//Challenge 7
const splitAndMerge = function (str, sep) {
  return str
    .split(' ')
    .map((str) => str.split(''))
    .map((str) => str.join(sep))
    .join(' ');
};

// testing
console.log(splitAndMerge('My name is John', ' '));
console.log(splitAndMerge('My name is John', '-'));
console.log(splitAndMerge('Hello World!', '.'));
console.log(splitAndMerge('Hello World!', ','));

// Challenge 8
const alienLanguage = function (str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(
      (str) => str.substring(0, str.length - 1).toUpperCase() + str.slice(-1)
    )
    .join(' ');
};

// challenge 9
const infiniteLoop = function (arr, d, n) {
  for (let i = 1; i <= n; i++) {
    if (d === 'left') {
      arr[2].push(arr[0].shift());
      arr[1].push(arr[2].shift());
      arr[0].push(arr[1].shift());
    }
    if (d === 'right') {
      arr[0].unshift(arr[2].pop());
      arr[1].unshift(arr[0].pop());
      arr[2].unshift(arr[1].pop());
    }
  }
  return arr;
};

infiniteLoop(
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  'left',
  1
);
infiniteLoop(
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  'right',
  1
);
infiniteLoop(
  [
    [1, 2],
    [3, 4, 5, 6],
    [7, 8, 9, 10],
  ],
  'left',
  2
);

// Challenge 10
// Remove all the odd numbers

const removeOdd = function (arr) {
  arr.forEach((ele, i, arr) => (ele % 2 === 0 ? arr.splice(i, 1) : ''));
  return arr;
};
console.log(removeOdd([1, 2, 3, 4, 5])); //output: [ 2, 4 ]
console.log(removeOdd([1, 3, 5, 7, 9]));

// Challenge 11
const makeSum = (arr) => arr.reduce((a, b) => a + b, 0);

// main function
const threeInOne = function (arr) {
  const sortedArr = [];
  for (let i = 0; i < arr.length; i += 3) {
    sortedArr.push(arr.slice(i, i + 3));
  }
  return sortedArr.map((numArr) => makeSum(numArr));
};

threeInOne([1, 2, 3]); // [6]
threeInOne([1, 2, 3, 4, 5, 6]); // [6,15]
threeInOne([1, 2, 3, 4, 5, 6, 7, 8, 9]); // [6,15,24]

// Challenge12
const isolateIt = function (arr) {
  const newArr = [];
  arr.map((str) => {
    const first = str.slice(0, str.length / 2);
    const second = str.slice(-str.length / 2);
    newArr.push(first + '|' + second);
  });
  return console.log(newArr);
};

isolateIt(['abcd', 'efgh']); //["ab|cd","ef|gh"]
isolateIt(['abcde', 'fghij']); // ["ab|de","fg|ij"]
isolateIt(['1234', '56789']); // ["12|34","56|89"]

// Challenge 12
const countGrade = function (scores) {
  const obj = {};
  (obj.S = scores.filter((score) => score === 100).length),
    (obj.A = scores.filter((score) => score < 100 && score >= 90).length),
    (obj.B = scores.filter((score) => score < 90 && score >= 80).length),
    (obj.C = scores.filter((score) => score < 80 && score >= 60).length),
    (obj.D = scores.filter((score) => score < 60 && score >= 0).length),
    (obj.X = scores.filter((score) => score === -1).length);
  return obj;
};

// Grade S: Full marks(score=100)
// Grade A: score<100 and score>=90
// Grade B: score<90 and score>=80
// Grade C: score<80 and score>=60
// Grade D: score<60 and score>=0
// Grade X: score=-1(The cheating guy gets a score like that)

console.log(countGrade([50, 60, 70, 80, 90, 100])); // {S:1, A:1, B:1, C:2, D:1, X:0}
countGrade([65, 75, , 85, 85, 95, 100, 100]); // {S:2, A:1, B:2, C:2, D:0, X:0}

// Ch 13
const myArr = [];

const incrArr = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    const incrNum = arr[i] + 1;
    myArr.push(incrNum);
  }
  return myArr;
};
