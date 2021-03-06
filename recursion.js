// 1. sum
const makeSum = function (n) {
  return n === 0 ? 0 : n + makeSum(n - 1);
};

console.log(makeSum(5)); // 1

//2. convert minute to sec
const convert = function (min) {
  return min === 0 ? 0 : 60 + convert(min - 1);
};

console.log(convert(5));

//3. range of num
const rangeOfNumbers = function (startNum, endNum) {
  if (startNum > endNum) {
    return [];
  } else {
    const rangeArr = rangeOfNumbers(startNum, endNum - 1);
    rangeArr.push(endNum);
    return rangeArr;
  }
};

//4. factorial
const factorial = function (num) {
  if (num === 1) {
    return 1;
  } else {
    return factorial(num - 1) * num;
  }
};

//5. multiply
const multiply = function (arr, n) {
  let product = 1;
  for (let i = 0; i < n; i++) {
    product *= arr[i];
  }
  return product;
};

//6. Palindrome
const isPalindrome = function (wrd) {
  if (wrd.length <= 1) {
    return true;
  } else {
    return wrd[0] === wrd[wrd.length - 1]
      ? isPalindrome(wrd.slice(1, -1))
      : false;
  }
};

console.log(isPalindrome('madam')); // ➞ true
console.log(isPalindrome('adieu')); // false
console.log(isPalindrome('r')); // ➞ true

//7. addup
const addUp = function (n) {
  return n === 0 ? 0 : n + addUp(n - 1);
};

//8. numberSquares
const numberSquares = function (num) {
  // base line
  if (num === 0) {
    return 0;
  }
  if (num === 1) {
    return 1;
  } else {
    return num * num + numberSquares(num - 1);
  }
};

console.log(numberSquares(2)); // ➞ 5

//9. repetition
const repetition = function (str, num) {
  return num === 0 ? '' : str + repetition(str, num - 1);
};

console.log(repetition('ab', 3)); // ➞ "ababab"
console.log(repetition('kiwi', 1)); // ➞ "kiwi"
console.log(repetition('cherry', 2)); // ➞ "cherrycherry"

//10. factorials
const factorial = function (n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
};
console.log(factorial(5)); // ➞ 120
console.log(factorial(3)); // ➞ 6
console.log(factorial(1)); // ➞ 1
console.log(factorial(0)); // ➞ 1

//11. findHighest
const findHighest = function (arr) {
  // base line
  if (arr.length === 0) return '';
  if (arr.length === 1) return arr[0];
  // recursion
  return arr[arr.length - 1] >= findHighest(arr.slice(1, arr.length - 1))
    ? arr[arr.length - 1]
    : findHighest(arr.slice(1, arr.length - 1));
};

console.log(findHighest([-1, 3, 5, 6, 99, 12, 2])); // ➞ 99
console.log(findHighest([0, 12, 4, 87])); // ➞ 87
console.log(findHighest([6, 7, 8])); // ➞ 8

//12. double factorial
const doubleFactorial = function (n) {
  return n < 1 ? 1 : n * doubleFactorial(n - 2);
};

//13. summArr - recursion
const sumArr = function (arr) {
  const newArr = arr.flat(Infinity);
  if (newArr.length === 0) {
    return 0;
  } else {
    return (
      newArr[newArr.length - 1] + sumArr(newArr.slice(0, newArr.length - 1))
    );
  }
};

// method
const SumArray = function (arr) {
  return arr.flat(Infinity).reduce((a, b) => a + b);
};
