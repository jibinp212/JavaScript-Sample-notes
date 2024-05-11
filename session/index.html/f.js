// var items = [
//     {
//         name: "PC",
//         price: 300
//     },
//     {
//         name: "TV",
//         price: 2000
//     },
//     {
//         name: "lap",
//         price: 5000
//     }
// ];
// var sum = 0;
// items.forEach((item) => {
//     sum = sum += item.price
// })
// console.log(sum)


// var sume = 0;
//     sume = sume += val
// }
// console.log(sum);


//     su += items[i].price
// }
// console.log(su)


//     some += x.price
// }
// console.log(some)

// items.forEach((items => somm += items.price));
// console.log(somm)


// const ba = { af: 5, adff: 9, adf: [3, 4, 3, 4] }

// const value = Object.values(ba).flat().filter((num) => num % 2 !== 0).reduce((p, c) => p + c, 0);
// console.log(value);


// Create an array containing only even numbers
// const ba = { af: 5, adff: 9, adf: [3, 4, 3, 4] }

// const value = Object.values(ba).flat().filter((num)=>num%2==0)
// console.log(value);

// Sum of even numbers only

// const ba = { af: 5, adff: 9, adf: [3, 4, 3, 4] }

// const value = Object.values(ba).flat().reduce((num, acc) => num + acc, 0)
// console.log(value);


// function callback (){
//     console.log("jibin")
// }
// callback()


// const arrays = [1, 2, 3, 4, 5, 6, 7, 8]
// for (i = 0; i < arrays.length; i++) {
//     sum += arrays[i]
// }
// console.log(sum)


// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//     sume += x;
// }
// console.log(sume);


// const arra = [1, 2, 3, 4, 5, 6, 7, 8, 9]


//     som += arra[y]
// }
// console.log(som);

// var arr = [1, 2, 3, 4, 5];
// arr.splice(0 ,1); 
// console.log(arr); 


// var arr = [1, 2, 3, 4, 5];
// arr.splice(3,); // Removes 1 element starting from index 2
// console.log(arr);


// var arr = [1, 2, 3, 4, 5];
// var slicedArr = arr.slice(1,);
// console.log(slicedArr); 




// const array = [1,2,3,4,5,6,7,8,9]

// const newArray = array.map((item)=> item * 5)

// console.log(newArray)


// var items = [
//     {
//         name: "PC",
//         price: 300
//     },
//     {
//         name: "TV",
//         price: 2000
//     },
//     {
//         name: "lap",
//         price: 5000
//     }
// ];
// const addpr = items.reduce((item,value)=>item+value.price,0.)

// console.log(addpr)


// const ancd = [
//     { afd: 446 },
//     { afd: 44 },
//     { afd: 44 },
//     { afd: 443 }
//   ];  

//   find the sum 
// const sumancd = ancd.reduce((item,value)=> item +value.afd,0)
// console.log(sumancd)

// const ancd = [
//     { afd: 446 },
//     { afd: 44 },
//     { afd: 44 },
//     { afd: 443 }
//   ];  

// const evennum = ancd.map(item => item.afd).filter(Number => Number % 2 === 0)
// console.log(evennum)


// const ancd = [
//     { afd: 446 },
//     { afd: 44 },
//     { afd: 44 },
//     { afd: 43 }
// ];

// const addancd = ancd.map(value => value.afd).filter(item => item % 2 ===0).reduce((acc, )=> acc+ itc )
// console.log(addancd)



// const ba = { af: 5, adff: 9, adf: [3, 4, 3, 4] };

// for (const key in ba) {
//     if (typeof ba[key] === 'number') {
//         sum += ba[key];
//     } else if (Array.isArray(ba[key])) { // If the property is an array, add its elements
//         sum += ba[key].reduce((acc, curr) => acc + curr, 0);
//     }
// }
// console.log("Sum:", sum);


// const abd = [{ af: [4, 35, 34], g: 5 }, { af: [4, 35, 34], g: [4, 34, 5] }, { adf: [4, 35, 34], dg: [4, 34, 5] }, { adf: [4, 35, 34], gd: [4, 34, 5] }, 4, 3, [4, 34, 23]];

// function sumValues(arr) {
//     arr.forEach(item => {
//         if (typeof item === 'number') {
//             sum += item;
//         } else if (Array.isArray(item)) {
//             sum += sumValues(item);
//         } else if (typeof item === 'object') {
//             sum += sumValues(Object.values(item));
//         }
//     });
//     return sum;
// }
// const totalSum = sumValues(abd);
// console.log(totalSum);


// const array = [1,2,45,6,75,33,12,32,3]

// sum = 0; 
//  for ( i=0;i<array.length;i++){
//     if ( array [i]> 10 ){
//         // sum++

//     console.log(sum)
//  }
// }

// const newarray = array.filter(item => item >10 )
// console.log(newarray)

// const array = [1, 2, 45, 6, 75, 33, 12, 32, 3];

// const result = array.sort((a,b)=>a-b).reduce((accumulator, currentValue) => {
//     if (currentValue > 10) {
//         accumulator.push(currentValue);
//     }
//     return accumulator;
// }, []);

// console.log(result)


// for (i = 1; i <= 5; i++) {
//     // for (j = 1; j <= i; j++){
//         document.write("* ")
//     }
//   document.write(" <br> ")
// // }

// for (i = 1; i <= 5; i++) {
//     for(K=5;K<=9;K++)
//        document.write(K,i)
//     document.write("<br>")
// }


// const array = [2,4,6,7,10];

// for ( i=0;i<array.length;i++){
//     if( )
//     sum += array[i]
// }
// console.log(sum)


// const array = [2,4,6,7,10];

//     if ( array.splice(2,2) )
// //    sum.push(array[i])
//    sum +=array[i]
// }
// console.log(sum)



//     array[i] *= array[i]
//     console.log(array)}
// const array = [1,2,3,4,5,5,6,7,7,77,8,8,6,5,4,3,]
// console.log(array.length)
// for ( i=0;i<array.length;i++){
// //   sum = array[1] + array[2]
//   sum = array.splice(2,array[i])
// }
// console.log(sum)


// const array = [2,6,7,10,4,5,67,8];
// const innnnn = array.findIndex(va=>va===6)
// console.log(innnnn)
// console.log(array.length)

// const add = array.splice(6,2).reduce((ac,cu)=>ac+cu,0)
// console.log(add)


// console.log(findind)

//     sum = array[3] + array[6];
// }
// console.log(sum)

// const index = [ 'jibin',"shibin ","sudha","suresh"]


// console.log(innn);




// console.log(myArray);


// const array = [2,6,7,10,4,5,67,8,45,46,53,56,78,87,65,90,32,31,];

// console.log(lastone)

// const last = array[18]
// console.log(last)


// const array = [2,6,7,10,4,5,67,8,45,46,53,56,78,87,65,90,32,31];

// const last = array[array.length -1]

// console.log(last)


// for (i=0;i<18;i=i+2){

//     console.log(i)
//     console.log("hello")
// }

// console.log(listarray)


// const array = [2,6,7,10,4,5,67,8,45,46,53,56,78,87,65,90,32,31]; 


//     if (array[i]> max -1 )
//      max =array[i]
//  }
//  console.log(max)

// const array = [2,6,7,10,4,5,67,8,45,46,53,56,78,87,65,90,32,31]; 


// for ( i=0;i<array.length;i++){
//    const srt = array[i] > array[i]

// }
// console.log(srt)

// b = 30;

// console.log(c)

// // x.toString();
// console.log(x.toString)
// // (123).toString();
// // (100 + 23).toString();

// x.toPrecision();
// x.toPrecision(2);
// x.toPrecision(4);
// x.toPrecision(6);
// x.toPrecision(8);


// const cars = ["Saab", "Volvo", "BMW"];
// console.log(cars)
// cars.toString();
// console.log(cars)
// cars.sort();
// console.log(cars)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits)


// const fs = ["Banana", "Orange", "Apple","Grapes","Lemon","Pinaple","Watermelon",];


// const fr=


// const av = [1,3,3,4,5,]
// const ab = ["ss","gg","aa"]

// const jn =

// console.log(fr)
// document.write(jn)

// const num = [0,1,2,3,4,5,6,7,8,9,10]

// num.copyWithin(5,3,8)
// console.log(num)


// // const myArr = [[1,2],[3,4],[5,6]];
// const merg = myArr.flat();
// console.log(merg)
// console.log(myArr)

// const num = [0,1,2,3,4,5,6,7,8]
// const citrus = num.slice(2,4)
// console.log(citrus)
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 3);
// console.log(citrus)

// const num = [0,1,2,3,4,5,6,7,8];
// const add = num.splice(2,6)
// console.log(add)


// const months = ["Jan", "Feb", "Mar", "Apr"];
// const spliced = months.toSpliced(2,2);
// console.log(spliced)


// const array = [2, 6, 7, 10, 4, 5, 67, 8, 45, 46, 53, 56, 78, 87, 65, 90, 32, 31];


// array

// const find = array.lastIndexOf[3]

// console.log(find)

// for (i = 0; i < array.length; i++) {
//    sum = array[2] + array[3]
  
// }console.log(sum)


// const sum = array.splice(3,2).reduce((ac,cr)=>ac+cr,0)
// console.log(sum)

//    if( i === 3 || i === 4 ){
//       sum += array[i]
//    }
// }
// console.log(sum)
//      sum = array[4] + array[5]
// }
// console.log(sum)
// const sum = array.splice(7,2)
// console.log(sum)



// const array = [2, 6, 7, 10, 4, 5, 67, 8, 45, 46, 53, 56, 78, 87, 65, 90, 32, 31];
// const months = ["Jan", "Feb", "Mar", "Apr"];


// const arr = months.entries();
// console.log(arr)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// // Create an Iterator
// const list = fruits.entries();

// // List the Entries
//   text += x;
// }
// console.log(fruits)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// for (i=0;i<fruits.length;i++){
//      store = fruits[i]
//      console.log(store)
// }


// const arr = ['a', 'b', 'c'];

//   const entry = [i, arr[i]];
//   console.log(entry);
// }

// const arr = ['a', 'b', 'c'];

// for ( i=0;i<arr.length;i++){
//    const arrr = [i,arr[i]]
//     console.log(arrr)
// }


// const arr = ['a', 'b', 'c'];
// for (let i = 0; i<arr.length;i++){
//     console.log(i,arr[i])
// }



// const ent = arr.map((val,en)=>[val,en]).flat()
// console.log(ent)


// const fruits = ["Banana", "Orange", "Apple", "Mango","djdj"];

// const fill = fruits.fill("sss",2,3)

// console.log(fill)
// const ages = [32, 33, 16, 40];

// const ag = [];
// for (i=0;i<ages.length;i++){
//   if (ages[i]>18){
//     ag.push(ages[i])
//   }else if (ages[i]<1){
//     ag.push(ages[i])
//   }

// }console.log(ag) 


const ages = [3, 10, 18, 20];
let find = [];

for (i=0;i<ages.length;i++){
    if(ages[i]>18){
       find.push(ages[i])
    }
}console.log(find)




