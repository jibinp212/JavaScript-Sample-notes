// const a =["jibin", "jib", "shsish","jbdjhxa"]
// document.write(a)
// Array literal
// const myArray = [1, 2, 3, 4, 5];

// // Using Array constructor
// const anotherArray = new Array(1, 2, 3, 4, 5);
// console.log(anotherArray)



// sort 
// let fruits = ['orange', 'apple', 'banana'];
// fruits.sort();
// document.write(fruits+"<br> ")


// let a = [5,3,8, 2];
// a.sort()
// document.write(a+"<br> ")


// let b = [8,2,9,3]
// b.sort((a,b)=>b-a);
// document.write(b);

// let people =[
//     {name: "jibin", age: 30},
//     {name: "jib",age: 22}
// ]
// people.sort((a,b)=>a.age-b.age);
// document.write(people)
// console.log(people)


// Push, add array last element 
// let num =["one", "two", "three"];
// // document.write(num+"<br> ")
// num.push("four");
// // document.write(num)

// let fruits = ['apple', 'banana'];
// let newLength = fruits.push('orange', 'kiwi');
// document.write(fruits+"<br> "); // Output: ['apple', 'banana', 'orange', 'kiwi']
// document.write(newLength+"<br> "); // Output: 4

// pop - remove the last element of array

// let fruits = ["apple", "banana", "orange"];
// document.write(fruits +"<br>");
// let lastFruit = fruits.pop();// Removes the last element from an array and returns that element.
// document.write(lastFruit)


// unshift - add first elemet in the array 
// let a=["one","two","three","four"];
// document.write(a+"<br>")

// a.unshift("zero")
// document.write(a)


// shift removes the first element of an array
// let f= ["one","two ","three","four"]
// let g=f.toString()
// document.write(g+"<br> ")

// let fruits = ["apple", "banana", "orange"];
// let fruitsString = fruits.join(', ');

// console.log(fruitsString); // Outputs: "apple, banana, orange"
// document.write(fruitsString);

// concat - 2 um orumipikan
// let fruits1 = ["apple", "banana"];
// let fruits2 = ["orange", "grape"];
// let allFruits = fruits1.concat(fruits2);
// document.write(allFruits)

// Define an array of fruits
// let fruits = ["apple", "banana", "orange", "grape"];

// // Remove "orange" from the array
// let removedItem = fruits.splice(2, 1);

// document.write(fruits); // Output: ["apple", "banana", "grape"]
// document.write( removedItem); // Output: ["orange"]


// let f= ["one","two ","three","four"]
// f.reverse()
// document.write(f)

// let students = [
//     { name: "Alice", grade: 85 },
//     { name: "Bob", grade: 90 },
//     { name: "Charlie", grade: 75 },
//     { name: "David", grade: 95 }
// ];

// students.forEach(function(student) {
//     document.write(`${student.name} scored ${student.grade} <br>`);
// });


// // map 
// let numbers = [1, 2, 3, 4, 5];

// // Mapping each number to its square
// let squaredNumbers = numbers.map(function(number) {
//     return number * number;
// });

// document.write(squaredNumbers); // Output: [1, 4, 9, 16, 25]


