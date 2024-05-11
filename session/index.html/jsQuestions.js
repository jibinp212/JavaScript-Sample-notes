// Given an array of objects, filter out objects where a specific property is null or undefined

// const arr = [
//     { id: 1, name: 'Alice', age: null },
//     { id: 2, name: 'Bob', age: 25 },
//     { id: 3, name: 'Charlie', age: undefined },
//     { id: 4, name: 'David', age: 30 }
//   ];

// const filteredArr = arr.filter(obj => obj.age !== null && obj.age !== undefined);
// console.log(filteredArr)


// const filteredArr = arr.filter(obj => obj.age != null);
// console.log(filteredArr);


// const filteredArr = arr.filter(obj => obj.age != null && obj.age != undefined);
// console.log(filteredArr);


// const filteredArr = arr.filter(obj => typeof obj.age !== 'undefined' && obj.age !== null);
// console.log(filteredArr);


// -------------------- reduce-------------------
// const filteredArr = arr.reduce((acc, obj) => {
//     if (obj.age !== null && obj.age !== undefined) {
//       acc.push(obj);
//     }
//     return acc;
//   }, []);
  
//   console.log(filteredArr);


// -----------------for of loop---------------
// const filteredArr = [];

// for (const obj of arr) {
//   if (obj.age !== null && obj.age !== undefined) {
//     filteredArr.push(obj);
//   }
// }
// console.log(filteredArr);

// 2. Filter out even numbers from an array. 

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evennum = numbers.filter(num =>num %2===0)
// console.log(evennum)  


// 3.Double each number in an array. in javscript

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = numbers.map(num => num * 2);
// console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// -----------foreach-----------
// const numbers = [1, 2, 3, 4, 5];
// let doubledNumbers = [];
// numbers.forEach(num => {
//   doubledNumbers.push(num * 2);
// });
// console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// -----------------for loop-----------------
// const numbers = [1, 2, 3, 4, 5];
// let doubledNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//   doubledNumbers.push(numbers[i] * 2);
// }
// console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// ------------------reduce----------
// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = numbers.reduce((acc, num) => {
//   acc.push(num * 2);
//   return acc;
// }, []);
// console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// ----------------map------------
// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = numbers.map(num => {
//   return num * 2;
// });
// console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = numbers.map(num => num * 2);
// console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]


// 3.Calculate the sum of all numbers in an array.

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((acc, num) => acc + num, 0);
// console.log(sum); // Output: 15

// const numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
// console.log(sum); // Output: 15

// const numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// numbers.forEach(num => {
//   sum += num;
// });
// console.log(sum); // Output: 15

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.map(num => num).reduce((acc, num) => acc + num, 0);
// console.log(sum); // Output: 15


//4. Access the value of a nested property in an object.

// const person = {
//     name: 'John',
//     address: {
//       city: 'New York',
//       country: 'USA'
//     }
//   };
  
//   const city = person.address.city;
//   console.log(city); // Output: 'New York'
  

// 5. Sort an array of strings in alphabetical order

// const fruits = ['banana', 'apple', 'orange', 'grape'];
// const sortedFruits = fruits.sort();
// console.log(sortedFruits); // Output: ['apple', 'banana', 'grape', 'orange']

// ------spread Oerator-------------
// const fruits = ['banana', 'apple', 'orange', 'grape'];
// const sortedFruits = [...fruits].sort();
// console.log(sortedFruits); // Output: ['apple', 'banana', 'grape', 'orange']


// 6. Find the first occurrence of a specific value in an array

// const numbers = [1, 2, 3, 4, 5];
// const index = numbers.indexOf(3);
// console.log(index); // Output: 2


// 7.Use setTimeout to delay execution of a function

// setTimeout(() => {
//     console.log('Hello after 3 seconds');
//   }, 3000);

  
// 8. User
// Calculate the square root of a number using Math.sqrt().

// const number = 16;
// const squareRoot = Math.sqrt(number);
// console.log(squareRoot); // Output: 4

// 9. 


