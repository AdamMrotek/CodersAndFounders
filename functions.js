//Functions Prompt
// Hello User
/////////////
const greeter = (name) => {
  return "Hello " + name;
};
console.log(greeter("Yvonne"));

//chcekType
////////////
const chcekType = (variable) => {
  return Array.isArray(variable) ? "array" : typeof variable;
};
console.log(chcekType("adam")); //string
console.log(chcekType(1)); //num
console.log(chcekType(null)); //object
console.log(chcekType([1, 2])); //array

//chcekLength
//////////////
const chcekLength = (string) => {
  return string.length;
};
console.log(chcekLength("very long string")); //16

//sum
/////////////////
const addTwoNumbers = (num1, num2) => {
  return num1 + num2;
};

//sum and multiply
//////////////////
const addAndMultiply = (num1, num2, num3, num4) => {
  return (num1 + num2) * (num3 + num4);
};
console.log(addAndMultiply(2, 3, 4, 5)); //45

//chcekLarger
///////////////////
const checkLarger = (a, b) => {
  return a * (a > b) + b * (b > a);
};
console.log(checkLarger(1, 2)); //2
console.log(checkLarger(44, 33)); //44

//Sum of elements
///////////////////
const addArrNums = (arrOfNumb) => {
  return arrOfNumb.reduce((acc, prev) => {
    return (acc += prev);
  }, 0);
};
console.log(addArrNums([4, 7, 12, 11])); //34

// Squareing a number
const squareNumber = (num) => {
  return num * num;
};
const checkIfOdd = (num) => {
  if (num) return num % 2 === 0 ? "Even" : "Odd";
  return "chekIfOdd needs argument";
};
console.log(checkIfOdd(134)); //even

const addPositive = (arrOfNumb) => {
  return arrOfNumb.reduce((acc, prev) => {
    return prev > 0 ? (acc += prev) : acc;
  }, 0);
};
console.log(addPositive([1, 3, 100, 0, -5000])); //104

//DOM
const hasAtLeastTwoNumbers = (string) => {
  return string.match(/([0-9])/g)?.length >= 2 ? true : false;
};
hasAtLeastTwoNumbers("asd");
const hasFiveChar = (string) => {
  return string.length >= 5 ? true : false;
};
console.log(hasFiveChar("dupaa"));
const hasOneSmallAndCapitalLetter = (string) => {
  let hasSmallLetter = /([a-z])/.test(string);
  let hasCapitalLetter = /([A-Z])/.test(string);
  return hasCapitalLetter && hasSmallLetter;
};
console.log(hasOneSmallAndCapitalLetter("aaaa"));
