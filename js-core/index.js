// 1.0 Variables
// -- Hello world
// -- Console.log()
console.log('Hello, World!');

// -- Variables
const mySentence = '123';

// let declaration allows us to reassign a new value, const does not!
let numberOfEggs = 4;

numberOfEggs = 6;

console.log(numberOfEggs + 6, mySentence);

// -- Code comments
// This is an single comment
/**
 * This is an multiple comment
 */

// -- Assignment by reference
let newNumberOfEggs = numberOfEggs;

// 2.0 Data Types (init / read / write)
// -- Strings
let myString = 'Hello my name is diepsang';
let extendedString = myString + '. And I like the color blue.';

console.log(myString[4]);

// -- Numbers
const favoriteNumber = 13;

// -- Arrays []
const groceryList = ['eggs', 'bananas', 'bread', 83];
groceryList[1] = 'kiwis';
console.log(1);

// -- Objects {}
const dictionary = {
  ocean: 'A body of water between countries',
  sea: 'A different body of water',
  myFavoriteNumber: 13,
};

const user = {
  name: 'diepsang',
  password: '**********',
};

console.log(user.name, user['password']);

user.name = 'diepsang13z';
user['password'] = '******';

console.log(user);

// -- Null & Undefined
const unknownNumber = null;
const undefinedValue = undefined;

console.log(unknownNumber, undefinedValue);

// -- Booleans (true / false)
const isDiepSangCool = true;
let isCabbageDelicious = false;

// 3.0 Logic and Operators
// -- Operators (+ - / %)
const sum = 3 + 9;

const division = 12 / 5;

const remainder = 12 % 5;

const isEven = 12 % 2;

console.log('remainder: ', remainder);

// -- Type of
const randomNumber = 833;

console.log(typeof randomNumber, typeof 'random string');

// -- Logical operators (|| &&)
// see below if else block example

// 4.0 Conditional Statements
// -- If else
const x = 21;
if (x > 10 || x < 20) {
  // Whatever code is written in here, is conditionally executed
  console.log('The value was greater than 10, or less than 20');
} else {
  console.log('The value was not greater than 10, or it was greater than 20');
}

// -- == vs ===
const num = 10;
const str = '10';

console.log(num == str); // true - The values are the same after type conversion
console.log(num === str); // false - The values are different types and not equal

// 5.0 Loops
// -- While loop
// let i = 0;
// while (i < 10) {
//   console.log(`The value of i = ${i}`);
//   i++;
// }

// -- For loop
// for (let i = 0; i < 10; i++) {
//   console.log(`The value of i = ${i}`);
// }

// -- For each
// -- Continue & break
const animals = ['duck', 'dog', 'cat', 'piggy'];
console.log(animals);

for (let animal of animals) {
  if (animal === 'dog') {
    continue;
  }

  if (animal === 'cat') {
    break;
  }

  const strToPrint = `The animal value is ${animal}`;
  console.log(strToPrint);
}

// -- 6.0 Function
// -- Create a function
function printSquare(x, y) {
  console.log(x * y);
}
// -- Invoke a function
printSquare(5, 6);

// -- return
// -- Default inputs
function addString(s1 = 'Hello, ', s2 = 'World!') {
  const concatString = s1 + s2;
  console.log(concatString);

  if (typeof s1 !== 'string' || typeof s2 !== 'string') {
    return;
  }

  return concatString;
}

const newString = addString('diepsang', ' is cool :))');
console.log(`New String is: ${newString}`);

// -- Arrow functions
const arrowFunction = (arg) => {
  console.log(`Arg: ${arg}`);
};
arrowFunction('Hehehe');
