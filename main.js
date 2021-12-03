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
