// function dis() {
//     console.log("Message displayed repeatedly.");
// }
// var intervalID = 
// setInterval(dis, 3000);

// setTimeout(function () {
//     clearInterval();
//     console.log("Interval stopped after 3 seconds.");
// }, 3000);


// 1
//  foreach
// const array = [1, 2, 3, 4, 5];
// const filteredArray = [];

// array.forEach(element => {
//   if (comparatorFunction(element)) {
//     filteredArray.push(element);
//   }
// });
// console.log(filteredArray);


// // filter 
// const array = [1, 2, 3, 4, 5];
// const filteredArray = array.filter(element => comparatorFunction(element));
// console.log(filteredArray);


// // loop
// const array = [1, 2, 3, 4, 5];
// const filteredArray = [];
// for (let i = 0; i < array.length; i++) {
//   if (comparatorFunction(array[i])) {
//     filteredArray.push(array[i]);
//   }
// }
// console.log(filt/eredArray);


// 2
// const str = "Hello, World!";
// const position = 7; // Get character at index 4
// const charAtIndex = str[position];
// console.log(charAtIndex); // Output: o


// 3
// const mainString = "Hello, World!";
// const searchString = "Hello";

// if (mainString.startsWith(searchString)) {
//   console.log("The mainString starts with the searchString.");
// } else {
//   console.log("The mainString does not start with the searchString.");
// }


// 4
// How to replace multiple spaces with single space in JavaScript?

// function replaceMultipleSpaces(str) {
//     return str.replace(/\s+/g, ' ');
// }

// // Example usage:
// const text = "Hello     world   example    sentence";
// const result = replaceMultipleSpaces(text);
// console.log(result); // Output: "Hello world example sentence"


// 5
// How to replace all occurrences of a string in JavaScript?

// function replaceAllOccurrences(str, search, replacement) {
//     return str.replace(new RegExp(search, 'g'), replacement);
// }

// // Example usage:
// const text = "Hello world, hello universe, hello everyone!";
// const searchText = "hello";
// const replacementText = "hi";
// const result = replaceAllOccurrences(text, searchText, replacementText);
// console.log(result); // Output: "Hi world, hi universe, hi everyone!"


// 6
// How are strings stored in JavaScript?
// Define a string containing characters from the Basic Multilingual Plane (BMP)

// const bmpString = "Hello, World! ";
// // Accessing individual characters
// console.log(bmpString[0]); // Output: "H"
// console.log(bmpString[7]); // Output: "W"
// console.log(bmpString[13]); // Output: "!"

// // Define a string containing characters outside the BMP
// const emojiString = "Hello, World! ";

// // Accessing individual characters
// console.log(emojiString[0]); // Output: "H"
// console.log(emojiString[7]); // Output: "W"
// console.log(emojiString[13]); // Output: "!"

// // Accessing characters outside the BMP
// console.log(emojiString[15]); // Output: "�" (the first part of the surrogate pair)
// console.log(emojiString[16]); // Output: "�" (the second part of the surrogate pair)

// 7
// What is the correct way to check for string equality in JavaScript?
// strict 
// const string1 = "hello";
// const string2 = "hello";
// const string3 = "Hello";

// console.log(string1 === string2); // Output: true
// console.log(string1 === string3); // Output: false

// loose 
// const string1 = "hello";
// const string2 = "hello";
// const string3 = "Hello";

// console.log(string1 == string2); // Output: true
// console.log(string1 == string3); // Output: false

// 8
// How to convert a string into a integer without using parseInt() function in JavaScript?
// function stringToInteger(str) {
//     let result = 0;
//     const isNegative = str[0] === '-';
//     let startIndex = isNegative ? 1 : 0;

//     for (let i = startIndex; i < str.length; i++) {
//         const digit = str.charCodeAt(i) - 48; // Convert ASCII to digit value
//         result = result * 10 + digit;
//     }

//     return isNegative ? -result : result;
// }

// // Example usage:
// const numberString = "123";
// const integer = stringToInteger(numberString);
// console.log(integer); // Output: 123
// console.log(typeof integer); // Output: number


// 9
// How to generate all combinations of a string in JavaScript?
// dont know  
// function generateCombinations(str) {
//     const result = [];

//     function backtrack(combination, index) {
//         result.push(combination);

//         for (let i = index; i < str.length; i++) {
//             backtrack(combination + str[i], i + 1);
//         }
//     }

//     backtrack('', 0);

//     return result;
// }

// // Example usage:
// const inputString = "abc";
// const combinations = generateCombinations(inputString);
// console.log(combinations);


// // 10
// How to find unique characters of a string in JavaScript?
// function findUniqueCharacters(str) {
//     const uniqueChars = new Set();

//     for (let char of str) {
//         uniqueChars.add(char);
//     }
//     return Array.from(uniqueChars);
// }
// // Example usage:
// const inputString = "hello";
// const uniqueCharacters = findUniqueCharacters(inputString);
// console.log(uniqueCharacters); // Output: ["h", "e", "l", "o"]


// 11
// How to create an element from a string in JavaScript?
// function createElementFromString(htmlString) {
//     const div = document.createElement('div');
//     div.innerHTML = htmlString.trim(); // Trim to remove leading and trailing whitespace
//     return div.firstChild;
// }

// // Example usage:
// const htmlString = "<p>Hello, <strong>world</strong>!</p>";
// const element = createElementFromString(htmlString);
// console.log(element);

// 12
// How to get the first three characters of a string using JavaScript?
// function getFirstThreeCharacters(str) {
//     return str.substring(0, 3);
// }

// // Example usage:
// const text = "Hello, world!";
// const firstThree = getFirstThreeCharacters(text);
// console.log(firstThree); // Output: "Hel"


// const greet = function (name) {
//     console.log(`Hello, ${name}!`);
// };

// function greetSomeone(greeter, name) {
//     greeter(name);
// }

// greetSomeone(greet, 'John');




// first class function 
// function sayHello(){
//     return 'hello'
// }

// function mainFunction (argFu, name){
//     console.log(argFu(),name)
// }
// mainFunction(sayHello,"john")


//  high order function 

// function multiplier(factor) {
//     return function(x) {
//       return x * factor;
//     };
//   }

//   const double = multiplier(2); // Returns a function that doubles its input
//   const triple = multiplier(3); // Returns a function that triples its input

//   console.log(double(5)); // Output: 10
//   console.log(triple(5)); // Output: 15


// for (let i = 1; i <= 100; i++) {
//     document.write(i);
//   }

// (function jib(){
//     console.log("goog ")
// }());

// function outfu() {
//     let otvr = 'I am from outerFunction';

//     function infu() {
//       console.log(otvr); // innerFunction has access to outerVariable
//     }

//     return infu;
//   }

//   const closure =  outfu();
//   closure(); // Output: "I am from outerFunction"


// currying

// function aadd3num (a){
//     return function (b){
//        return  function (c){
//             console.log(a+b+c);
//         }
//     }
// }
// aadd3num(10)(20)(40);

// console.log(x);
// var x = 10;

// console.log(y)
// let y=10;

// console.log(z)
// const z=30;
// console.log(z)


// first concept  
// function sayhello(){
//     return "hello";
// }
// function mainFunction(arg,name){
//     console.log(arg(),name)
// }
// mainFunction(sayhello,"jibin")

// function abc(y){
//     console.log('jibin')
//     y()
// }
// function xyz(){
//   console.log("shibin")
// }
// xyz(y           )
// 2nd concept 

// 3rd concept 

// for (i=1;i<=100;i++){
//   // document.write(i)
// }
// document.write(i)


// for (let i = 1; i <= 100; i += 2) {
//   console.log(i);
// }


// for (i=2;i<=100;i++){
//   console.log(i)
// }

// let n = 5;

// for (let i = 1; i <= n; i++) {
//   let row = '';
//   for (let j = 1; j <= n - i; j++) {
//     row += ' ';
//   }
//   for (let k = 1; k <= i; k++) {
//     row += '* ';
//   }
//   console.log(row)
// }

// for (i = 1; i <= 5; i++) {
//   for (let j = 1; j <= i; j++) {
//     document.write("*")
//   }

//   document.write("<br/> ")
// }


// for (let i=1;i<=5;i++){
//   for(let j=1;i<=i;i++){
//     document.write("*")
//   }
//   document.write("<br>")
// }

