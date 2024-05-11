// var a = 10 ;
// if ( a<9){
//     console.log("a is < 9 ")
// }


// var mixedArray = [
//     { name: "John", age: 25 },
//     "some string",
//     42,
//     { key: "value" },
//     [1, 2, 3]
// ];


// function findString(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === "string") {
//             return "String found: " + arr[i];
//         }
//     }
//     return "String not found";
// }
// console.log(findString(mixedArray));


// var mixedArray = [
//     { name: "John", age: 25 },
//     "some string",
//     42,
//     { key: "value" },
//     [1, 2, 3]
// ];


// function findNumber(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === "number") {
//             return "Number found: " + arr[i];
//         }
//     }
//     return "Number not found";
// }
// console.log(findNumber(mixedArray));



// function onetohund(){
//     for (i=1;i<=100;i++){
//         console.log(i)
//     }
// }
// onetohund()


// function addsum() {
// var sum = 0;
//     for (let i = 1; i <= 100; i++) {
//       sum += i;
//     }
//     return sum;
// }
// addsum()

// var mixedArray = [
//     { name: "John", age: 25 },
//     "some string",
//     42,
//     { key: "value" },
//     [1, 2, 3]
// ];

// function findString(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === "string") {
//             return "String found: " + arr[i];
//         }
//     }
//     return "String not found";
// }
// console.log(findString(mixedArray));



// const array = [1,2,3,4,5,6]

// for (i=1;i<array.length;i++){
//     console.log(array[i])
// }


// const array1 =[10,20,30,40,50,60]

// for (const x of array1){
//     document.write(x +"<br>")
// }

// const array2 =[10,20,30,40,50,60,70,]

// // for (const y in array2){
// //     document.write(array2[y]+"<br>")
// // }

// sum = 0;
// for (i=0;i<array2.length;i++){
//     sum = sum +=array2[i]
// }
// console.log(sum)




// const array2 =[10,20,30,40,50,60,70,80]; 
// let arr = 0;
// for ( i of array2){
//     arr += i
// }
// console.log(arr)


// const array2 = [10, 20, 30, 40, 50, 60, 70, 80];
// let sum = 0;
// for (i in array2) {
//     sum += array2[i]
// }

// console.log(sum)


// const array2 = [10, 20, 30, 40, 50, 60, 70, 80];
//   sum = 0;
//      array2.forEach(function(value,index){
//         // console.log(value)
//         // console.log(index)
//         sum = sum + value
//     }) 
// console.log(sum)



// questions  

// const ab = [{af:3,plaf:4},{af:3,plaf:4},{af:3,plaf:4}]


// const ab = [{af:3,plaf:[6,7,45,3]},{af:3,plaf:[4]},{af:3,plaf:[4]}]

// const ba = {af:4,adf:4,adf:[3,4,3,4]}

// 1. 
// const ab = [{af:3,plaf:4},{af:3,plaf:4},{af:3,plaf:4}]

// let sum = 0;
// for ( const addab of ab){
//     // sum += addab.af;
//     // sum += addab.plaf
// //   sum += addab[plaf.af]
// }
// console.log(sum)


// const ab = [{af:3,plaf:4},{af:3,plaf:4},{af:3,plaf:4}]


// const ab = [{af:3,plaf:4},{af:3,plaf:5},{af:3,plaf:4}];
// const evenNumbers = []; // Initialize an empty array to store even numbers

// for (const obj of ab) { // Loop through each object in the array
//     if (obj.af % 2 === 0) { // Check if the value of 'af' property is even
//         evenNumbers.push(obj.af); // If it's even, add it to the 'evenNumbers' array
//     }
// }

// console.log("Even numbers:", evenNumbers); // Print the array of even numbers
// const ab = [{af:3,plaf:4},{af:3,plaf:4},{af:3,plaf:4}];
// const evenNumbers = []; // Initialize an empty array to store even numbers

// for (const obj of ab) { // Loop through each object in the array
//     if (obj.af % 2 === 0) { // Check if the value of 'af' property is even
//         evenNumbers.push(obj.af); // If it's even, add it to the 'evenNumbers' array
//     }
// }

// console.log("Even numbers:", evenNumbers); // Print the array of even numbers

// const ab = [{af:3, plaf:4}, {af:3, plaf:5}, {af:3, plaf:4}];

// for (const obj of ab) { 
//     if (obj.af % 2 === 0) { 
//      document.write(obj.af);}
// }


// const ab = [{af:3,plaf:4},{af:3,plaf:5},{af:3,plaf:4}];
// const evenNumbers = []; // Initialize an empty array to store even numbers

// for (const obj of ab) { // Loop through each object in the array
//     if (obj.af % 2 === 0) { // Check if the value of 'af' property is even
//         evenNumbers.push(obj.af); // If it's even, add it to the 'evenNumbers' array
//     }
// }

// console.log("Even numbers:", evenNumbers); // Print the array of even numbers


// const ab = [{af: 3, plaf: 4}, {af: 3, plaf: 4}, {af: 3, plaf: 4}];
// const evenNumbers = [];

// for (const obj of ab) {
//     if (obj.af % 2 === 0) {
//         evenNumbers.push(obj.af);
//     }
// }
// console.log("Even numbers:", evenNumbers); // Output: Even numbers: []


// const ab = [{af: 3, plaf: 4}, {af: 3, plaf: 4}, {af: 3, plaf: 4}];

// for (const obj of ab) {
//     if (obj.af % 2 === 0) {
//         console.log(obj.af);

//     }
// }

// Given array of objects
// const ab = [{af: 3, plaf: 4}, {af: 3, plaf: 4}, {af: 3, plaf: 4}];

// // Iterate through each object in the array
// for (const obj of ab) {
//     // Check if the value of the 'af' property is even
//     if (obj.af % 2 === 0) {
//         // If even, print the value
//         console.log(obj.af);
//     }
// }


// const ab = [{af: 3, plaf: 4}, {af: 3, plaf: 4}, {af: 3, plaf: 4}];

// for (const obj of ab) {
//     if (obj.af % 2 === 1) {
//         console.log(obj.af);
//     }
// }

// const ab = [{af: 3, plaf: 4}, {af: 3, plaf: 4}, {af: 3, plaf: 4}];
// const evenNumbers = ab.filter(obj => obj.plaf % 2 === 0);
// console.log(evenNumbers.map(obj => obj.plaf));


// const abd = [{af:[4,35,34],g:5},{af:[4,35,34],g:[4,34,5]},{adf:[4,35,34],dg:[4,34,5]},{adf:[4,35,34],gd:[4,34,5]},4,3,[4,34,23]];

// function sumArray(arr) {
//     let sum = 0;
//     arr.forEach(element => {
//         if (Array.isArray(element)) {
//             sum += sumArray(element);
//         } else if (typeof element === 'object') {
//             sum += sumArray(Object.values(element));
//         } else if (typeof element === 'number') {
//             sum += element;
//         }
//     });
//     return sum;
// }

// const totalSum = sumArray(abd);
// console.log("Sum of all elements:", totalSum);


// const ab = [{af: 3, plaf: 4}, {af: 3, plaf: 4}, {af: 3, plaf: 4}];
// let sum = 0;
// for (const obj of ab) {
//     sum += obj.af;
// }
// console.log(sum);



// const abd = [{af:[4,35,34],g:5},{af:[4,35,34],g:[4,34,5]},{adf:[4,35,34],dg:[4,34,5]},{adf:[4,35,34],gd:[4,34,5]},4,3,[4,34,23]];

// // Filter objects that have 'af' and 'g' properties
// const validObjects = abd.filter(obj => obj.af && obj.g);

// // Extract all arrays from 'af' and 'g' properties
// const arrays = validObjects.map(obj => [obj.af, obj.g]).flat();

// // Flatten the array of arrays and filter out non-numeric values
// const numericValues = arrays.flat().filter(val => typeof val === 'number');

// // Sum up the numeric values
// const sum = numericValues.reduce((acc, val) => acc + val, 0);

// console.log("Sum:", sum);


// const abd = [{af:[4,35,34],g:5},{af:[4,35,34],g:[4,34,5]},{adf:[4,35,34],dg:[4,34,5]},{adf:[4,35,34],gd:[4,34,5]},4,3,[4,34,23]];

// // Extract arrays from 'af' and 'g' properties
// const arrays = abd.flatMap(obj => [obj.af, obj.g].filter(Array.isArray));

// // Flatten the array of arrays and filter out non-numeric values
// const numericValues = arrays.flat().filter(val => typeof val === 'number');

// // Filter out even numbers
// const evenNumbers = numericValues.filter(val => val % 2 === 0);

// console.log("Even numbers:", evenNumbers);

// const b = [3, 4, 3, 5, 23, 42];

// var evennumbers = [];

// for ( i=1;i<b.length;i++){
//     if( b[i] % 2===0){
//         evennumbers.push(b[i])
//     }
// }

// console.log(evennumbers)



// const b = [3, 4, 3, 5, 23, 42];

// b.sort((a,b)=>a-b)

// console.log(b)


// const b = [3, 4, 3, 5, 23, 42];

// const multiplied = [];

// for ( i =1;i<b.length;i++){
//     multiplied.push(b[i]*10)
// }
// console.log(multiplied)




// const ba = [[4, 34], [4, 34], [4, 34], [4, 34]]

// let  sum = 0;

// for (i = 0; i < ba.length; i++) {
//     for (j = 0; j < ba[i].length; j++) {
//         sum += ba[i][j];
//     }
// }
// console.log(sum)


// const ba = [[4, 34], [4, 34], [4, 34], [4, 34]]

// const evennumbers = [];

// for (i = 0; i < ba.length; i++) {
//     for (j = 0; j < ba[i].length; j++) {
//         if (ba[i][j] % 2 === 0)
//             evennumbers.push(ba[i][j])
//     }
// }

// console.log(evennumbers) 



// questions  


// const aba ={adf:[434,6,6],adf:4}

// const ba = [{adf:[4,5],ag:4},{adf:[4,5],ag:4},{adf:[4,5],ag:4}]

// const ba= [[4,34],[4,34],[4,34][4,34]]

// const b = [3,4,3,5,23,42]

// const ab = [{af:3,plaf:4},{af:3,plaf:4},{af:3,plaf:4}]


// const ab = [{af:3,plaf:[6,7,45,3]},{af:3,plaf:[4]},{af:3,plaf:[4]}]

// const ba = {af:4,adf:4,adf:[3,4,3,4]}


// -------------------------

// const aba ={adf:[434,6,6],adf:4}
 
// let sum = 0;

// if (Array.isArray(aba.adf)){
//     for ( let i = 0;i< aba.adf.length;i++){
//         sum += aba.adf[i];
//     }
// }
// console.log(sum)


// const aba ={adf:[434,6,6],adf:4}

// const addarray = aba.adf;
// const evennumbers = [];

// if ( Array.isArray(addarray)){
//     for (i = 0; i<addarray.length;i++){
//         if (addarray[i] %  2 === 1 ){
//             evennumbers.push(addarray[i])
//         }
//     }
// }
// console.log(evennumbers)



// const b = [3,4,3,5,23,42] 
// let sum = 0;
// for (let su of b){
//       sum += su
// }
// console.log(sum)


// const abd ={f:4,adf:6}

// const sum = 0;
// for ( let i of abd){
//       sum +=abd[i]
// }
// console.log(sum)



// const abd = {f: 4, adf: 6};

// let sum = 0;
// for (let key in abd) {
//     sum += abd[key];
// }

// console.log("The sum is:", sum); // Output: The sum is: 10


// const ab = [
//       { af: 3, plaf: 4 },
//       { af: 3, plaf: 4 },
//       { af: 3, plaf: 4 }
//   ];

// let sum = 0;
// ab.forEach(obj=> {
//       sum += obj.af + obj.plaf;
// })

// console.log(sum)


// const ab = [{af:3,plaf:4},{af:3,plaf:4},{af:3,plaf:4}]

// const oddnumbers = [];

// for (i = 0; i<ab.length;i++){
//       if (ab[i].af % 2 !== 0  || ab[i].plaf % 2 !== 0) {
//             oddnumbers.push(ab[i])
//       }
// }
// console.log(oddnumbers)




// const b =[3,4,3,5,23,42]

// for (i=0;i<b.length;i++){
//     console.log(b)
// }


// const b =[3,4,3,5,23,42]

// for (i=0;i<b.length;i++){
//     console.log(b[i])

// }

// const b =[3,4,3,5,23,42] 

// for (let key of b){
//   console.log(b[key])
// }

// const b =[3,4,3,5,3,4] 

// for (let key of b){
//   key.sort();
//   console.log(key);
// }

  




      
    