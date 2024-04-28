banana

const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
true * 
const deepClone = obj => JSON.parse(JSON.stringify(obj));
const findLargestNumber = numbers => Math.max(...numbers);
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
