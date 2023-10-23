//1-Sum of the elements

const sumOfElements = function (array) {
  let sum = 0;
  for (let i = 0; i <= array.length - 1; i++) {
    sum += array[i];
  }
  return sum;
};

console.log(sumOfElements([1, 2, 3, 4, 5]));

//2- Calculate the average of elements

const averageOfElements = function (array) {
  let sum = 0;
  for (let i = 0; i <= array.length - 1; i++) {
    sum += array[i];
  }
  return sum / array.length;
};

console.log(averageOfElements([10, 20, 30, 40, 50]));

//3- Find the Smallest/largest elements

const minAndMax = function (array) {
  let max = array[0];
  let min = array[0];
  for (let i = 0; i <= array.length - 1; i++) {
    if (array[i] > max) {
      max = array[i];
    }
    if (array[i] < min) {
      min = array[i];
    }
  }
  return `largest: ${max}, smallest: ${min}`;
};

console.log(minAndMax([8, 2, 7, 3, 11]));

//4- Reverse an Array - create a function that reverses an array of elements

const reverseArray = function (arr) {
  let reverseArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reverseArray.push(arr[i]);
  }
  return `Reverse Array: [${reverseArray}]`;
};

console.log(reverseArray([1, 2, 3, 4, 5]));

// 5 - Search for an Element: Write a program that searches for a specific element

const searchForElement = function (x, arr) {
  let position;
  let found = false;

  for (let i = 0; i <= arr.length - 1; i++) {
    if (x === arr[i]) {
      found = true;
      position = arr.indexOf(x);
    }
  }
  if (found) {
    return `Element found at position ${position}`;
  } else {
    return `This number is not included in the array`;
  }
};

console.log(searchForElement(220, [10, 20, 30, 40]));

console.log("------------WORKING WITH STRINGS------------------");

//6 - Counting Characters: write a program that counts how many chracters of a specific type are given in a string

let wordInput = document.querySelector("#word");
let outputParagraph = document.querySelector("#output");

const lowercaseLetters = function () {
  let str = String(wordInput.value);
  let lowercaseLettersArray = [];
  let output = "";
  for (let i = 0; i <= str.length - 1; i++) {
    if (str[i].toLowerCase() === str[i]) {
      lowercaseLettersArray.push(str[i]);
    }
    output = lowercaseLettersArray.join();
  }
  outputParagraph.innerHTML =
    output + `--Number of lowercase letters: ${lowercaseLettersArray.length}`;
};

const uppercaseLetters = function () {
  let str = String(wordInput.value);
  let uppercaseLettersArray = [];
  let output = "";
  for (let i = 0; i <= str.length - 1; i++) {
    if (str[i].toUpperCase() === str[i]) {
      uppercaseLettersArray.push(str[i]);
    }
    output = uppercaseLettersArray.join();
  }
  outputParagraph.innerHTML =
    output + ` --Number of uppercase letters: ${uppercaseLettersArray.length}`;
};

//7 - Check if a given string is a palindrome

const checkPalindrome = function (str) {
  for (let i = 0; i <= str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return `The string "${str}" is not a palindrome`;
    }
  }
  return `The string "${str}" is  a palindrome`;
};

console.log(checkPalindrome("racecar"));

//8- Reverse a string

const reverseString = function (str) {
  let reverseArray = [];
  for (let i = str.length - 1; i >= 0; i--) {
    reverseArray.push(str[i]);
  }
  return reverseArray.join("");
};

console.log(reverseString("aloha"));

//9- Remove whitespace

const removeWhitespace = function (str) {
  let newArray = [];
  const trimmedArray = str.trim().split("");
  for (let i = 0; i <= trimmedArray.length - 1; i++) {
    if (trimmedArray[i] !== " ") newArray.push(trimmedArray[i]);
  }
  return newArray.join("");
};

console.log(removeWhitespace("         Hello     World     "));

//10- Check for substrings -

const checkForSubstring = function (substr, str) {
  if (str.indexOf(substr) > -1) {
    return `The string contains the substring "${substr}"`;
  } else {
    return `The string does not contain the substring "${substr}"`;
  }
};

console.log(checkForSubstring("cat", "are you a dog?"));

// 11- Using loops: Display the multiplication table for a given number using a for loop

const multiplicationTable = function (n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
};

multiplicationTable(4);

//12 - Prime numbers: Find all prime numbers up to a given number using a for loop

const primeNumbers = function (n) {
  if (n === 1) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
};

console.log(primeNumbers(3));

const primeNumbersCount = function (n) {
  const arrayPrimes = [];
  for (let i = 2; i <= n; i++) {
    if (primeNumbers(i)) arrayPrimes.push(i);
  }
  return arrayPrimes;
};

console.log(primeNumbersCount(18));

//13 Fibonacci Series: Display the first n numbers in the Fibonacci series using a for loop

const fibonacciSeries = function (n) {
  let firstNumber = 0;
  let secondNumber = 1;
  let nextNumber;
  let fibbArray = [];
  if (n === 1) {
    console.log(`0, 1`);
  } else n > 1;

  {
    for (let i = 1; i <= n; i++) {
      nextNumber = i - 1 + (i - 2);
      firstNumber = secondNumber;
      // secondNumber = nextNumber;
    }
  }
  return fibbArray.push(432);
};

console.log(fibonacciSeries(5));
