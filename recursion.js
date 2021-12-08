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
