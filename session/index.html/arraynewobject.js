// let student ={
//     name: "jibin",
//     age: 22,
//     job: "developer"
// }

// let car ={
//     name : "swift ",
//     model: 2020,
//     mode : "manual"
// }

// console.log(student.name)

// const array = [{
//     name: "jibin",
//     age: 22,
//     place: "kannur",

// },
// {
//     name: "jee",
//     age: 30,
//     place: "thaliparamba"
// },
// {
//     name: "sudha",
//     age:49,
//     place: " Alapuzha",

// },
// {
//     name: "suresh",
//     age: 56,
//     place: "tvm"
// }
// ];

// let red= array.reduce((item)=>{
//     return 
// })



// const ancd = [
//     { afd: 446 },
//     { afd: 44 },
//     { afd: 44 },
//     { afd: 443 }
//   ];

//   const oddNumbers = [];

//   ancd.forEach(obj => {
//     const value = obj.afd;
//     if (value % 2 !== 0) {
//       oddNumbers.push(value);
//     }
//   });

//   console.log(oddNumbers); // Output: [443]


// -------------------------------------------

//   const anc = [
//     { afd: 446 },
//     { afd: 44 },
//     { afd: 44 },
//     { afd: 443 }
//   ];

//   const evenNumbers = [];

//   ancd.forEach(obj => {
//     const value = obj.afd;
//     if (value % 2 === 0) {
//       evenNumbers.push(value);
//     }
//   });

//   console.log(evenNumbers); // Output: [446, 44, 44]

// ------------------------------------

// const abd = { f: 4, adf: 6 };

// const sum = abd.f + abd.adf;

// console.log(sum); // Output: 10

// -----------------------------------

// const aba = { adF: [4, 34, 34, 534] };

// const sum = aba.adF.reduce((acc, curr) => acc + curr, 0);
// const totalElements = aba.adF.length;

// const percentage = (sum / (totalElements * 100)) * 100;

// console.log(percentage); // Output: 10.95

// =------------------------------

// const aba = [
//     { df: 34, da: 4 },
//     { f: 34, da: 4 },
//     { fd: 34, dda: 4 }
//   ];

//   let sum = 0;

//   aba.forEach(obj => {
//     Object.values(obj).forEach(value => {
//       sum += value;
//     });
//   });

//   console.log(sum); // Output: 114

// let array =[ "a","b","c","d","e","f","g"]
// console.log(array)
// // array[5]="f"
// // console.log(array)
// // console.log(array.length)
// var ab =array.length;
// // console.log(ab)



// for (i=0;i<ab;i++){
//     document.write(array[i]+"<br>"
//     );
// };

// array.push("h")
// console.log(array)

// array.shift()
// console.log(array)

// array.pop()
// console.log(array)


// array.splice(1,4)
// console.log(array)

// var num =[40,30,50,110,10,20]
// num.sort()
// console.log(num[1]+num[2])


// var alpha=["d","c","s","j","m"]
// // alpha.sort()
// console.log(alpha)


// var abc =["a","b","c","d","e","f","g"]

// // console.log(abc.toString())

// // console.log(abc.join(","))
// abc[1]="aa"
// console.log(abc)


// console.log(alpha.concat(abc));



// let car ={
//     name : "swift ",
//     model: 2020,
//     mode : "manual"
// }

// console.log(student.name)

// const array = [{
// name: "jibin",
//     age: 22,
//     place: "kannur",

// },
// {
//     name: "jee",
//     age: 30,
//     place: "thaliparamba"
// },
// {
//     name: "sudha",
//     age:49,
//     place: " Alapuzha",

// },
// {
//     name: "suresh",
//     age: 56,
//     place: "tvm"
// }
// ];

// reduce --------------


// -----------map-------------

// let newmap = array.map((item,index)=>{
//     return item.name+" "+ item.place;
//     // return "hi"

// })
// console.log(newmap)

// ---------------foreach ---------
// let sum =0
// array.forEach((item)=>{
//  sum = sum + item.age
// });
// console.log(sum);


// array.forEach((item,index)=>{
//     console.log(`index: ${index}, name :${item.name}`)
// })


// -------------------find-------------------
// var array =[10,20,30,40]
// b
// var found = array.find((item)=>{
//        return item.age<32
// });
// console.log(found);

// const array = [4,5,6]

// var newArray = array.find((x)=>x===4)
// console.log(newArray)
// var findInd = array.findIndex((x)=>x===2)
// console.log(findInd)

// const number = [1, 2, 3, 4, 5];

// const found = number.find((num) => num > 3);

// console.log(found); // Output: 4


// const numbers = [1, 2, 3, 4, 5];

// const foundIndex = numbers.findIndex((num) => num > 3);

// console.log(foundIndex); // Output: 3 (index of element 4)

// -------------filter ------------------
//  let fil = array.filter((item,index)=>{
// //    return (index <2) ;
//    return (item.age >30)
// })
// console.log(fil);


// let arr = [1, 2, 3];
// let squared = arr.map(item => item * item); // squared is [1, 4, 9]


// let array = [1, 2, 3];
// let square  = array.map((item )=> {
//     return (item * item);
// })
//     console.log(square)


// var items =[
//     {
//         name: "phone",
//         price:300
//     },
//     {
//         name:"jjj",
//         price:400
//     },
//     {
//         name: "grinder",
//         price: 500
//     }
// ];
//  var addamount = items.reduce((addamount, item)=>{
//     return addamount+ item.price;
// } ,0)
// console.log(addamount)


// const abd = { f: 4, adf: 6 };

// const sum = abd.f + abd.adf;

// console.log(sum); // Output: 10 (4 + 6)



// const abd = { f: 4, adf: 6 };

// const sum = abd.f+ abd.adf;

// console.log(sum);

// var array =[0,1,2,3,4,5,6,7,8,9]
// console.log(array.())
// document.write(array.copyWithin(0,2))


// var array= ["jibin","reeba","samyuktha","navya","anunandha"]

// const newarray = array.entries();

// // for (var e of newarray)
// // {
//     // document.write(e+"<br>")
//     console.log(newarray)
// // }


// var array = ["jibin", "reeba", "samyuktha", "navya", "anunandha"]

// var newarray = array.entries();

// for (let [index, value ] of newarray){
//    console.log(index +" "+value+"<br>")
// }


// const fruits = ['apple', 'banana', 'cherry'];
// const it = fruits.entries();

// for (let ent of it) {
//     console.log(ent);
// }


//  -------------------Every-----------------
// 1
// const fruits = ['apple', 'banana', 'cherry'];

// const allStrings = fruits.every((fruit) => typeof fruit === 'string');

// console.log(allStrings); 

// // 2
// const numbers = [1, 2, 3, 4, 5];

// const allEven = numbers.every((num) => num % 2 === 0);

// console.log(allEven); 

// // 3
// var marks = [10,20,30,40,50]

// function check (value){
//     return value<9;
// }

// console.log(marks.every(check));


// ------------------------includes ---------


// var include = ["a","b","c","d"]

// var addinclude = include.includes("b")
// console.log(addinclude);
// var addinclude = include.includes("f")
// console.log(addinclude);



// ---------------------join-----------

// var include = ["a","b","c","d"]

// // var inc = [10,22,33,2,2,45,]

// var addval = include.join("")
// console.log(addval)

// ---------reduce -------------
// var numbers =[1,2,3,4,5,6]

// var addnumbers = numbers.reduce((p,c)=>{
//     return p+c
// },0)
// console.log(addnumbers)


// const arrays = [[1, 2], [3, 4], [5, 6]];

// const flattened = arrays.reduce((acu, crtval) => {
//   return acu.concat(crtval);
// }, []);

// console.log(flattened); // Output: [1, 2, 3, 4, 5, 6]

// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// console.log(sum); // Output: 15


// var items =[
//     {
//         name :"PC",
//         price: 300
//     },
//     {
//         name:"TV",
//         price: 2000
//     },
//     {
//         name:"lap",
//         price:5000
//     }
// ];

//  var addItems = items.reduce((p,c)=>{
//       return  p+c.price
//  },0)

// console.log(addItems)

// ------------reduceRight--------------

// var rdright ="hello"

// var newredRight=Array.from(rdright).reduceRight((p,c)=>{
//  return p+c
// },"")

// console.log(newredRight)

// var numbers =[1,2,3,4,5,6,7,8,9]

// var addnumbers = numbers.reduceRight((p,c)=>{
//     return p+c;
// });

// console.log(addnumbers)


// const numbers = [1, 2, 3, 4, 5];
// const reversedString = numbers.reduceRight((acc, curr) => acc + curr, '');
// console.log(reversedString); // Output: '54321'



// reverse ------------------

// const array = ["a","b","c","d","e"]

// const revArray =array.reverse();

// console.log(revArray)


// const str = "hello";

// const reversedStr = str.split("").reverse().join("");

// console.log(reversedStr); // Output: "olleh"


// const str = "hello";
// let reversedStr = "";

// for (let i = str.length - 1; i >= 0; i--) {
//   reversedStr += str[i];
// }

// console.log(reversedStr); // Output: "olleh"


// const numbers = [1, 2, 3, 4, 5];
// const reversedNumbers = numbers.reduce((acc, curr) => [curr].concat(acc), []);

// console.log(reversedNumbers); // Output: [5, 4, 3, 2, 1]

// -----some--------------

// const numbers = [1];
// const hasEven = numbers.some((num) => num % 1 === 0);
// console.log(hasEven); 

// sort -------------
// var array1 =[3,5,3,1,5]
// var addarray = array1.sort()
// console.log(addarray)


// const array = ["orange","apple","banana"]

// const srt= array.sort();
// console.log(srt);



// var number = [1,1,2,3,4,5,6,66,54,5,,55,]
// var srtnum = number.sort((a,b)=> a-b)
// console.log(srtnum)


// let person = [
//     {
//         name: "jibin",
//         age :20
//     },
//     {
//         name: "shibin",
//         age: 18,
//     }
// ]
// console.log(person)
// let per = person.sort((a,b)=>a.age-b.age)
// console.log(per)


// const aba = [
//     { af: [43, 534], afd: 34 },
//     { afpl: [43, 534], afd: 34 },
//     { af: [43, 534], adfd: 34 }
// ];

// //   // 1. Find the sum of even numbers
// let sumOfEven = 0;

// aba.forEach(obj => {
//     Object.values(obj).forEach(value => {
//         if (Array.isArray(value)) {
//             value.forEach(num => {
//                 if (num % 2 === 0) {
//                     sumOfEven += num;
//                 }
//             });
//         }
//     });
// });

// console.log('Sum of even numbers:', sumOfEven);

// // 2. Create new array containing only even numbers
// const evenNumbersArray = [];

// aba.forEach(obj => {
//     Object.values(obj).forEach(value => {
//         if (Array.isArray(value)) {
//             value.forEach(num => {
//                 if (num % 2 === 0) {
//                     evenNumbersArray.push(num);
//                 }
//             });
//         }
//     });
// });

// console.log('Array of even numbers:', evenNumbersArray);



// // another Question 

// const abac = [{ af: [43, 534], afd: 34 },
// { afpl: [43, 534], afd: 34 },
// { af: [43, 534], adfd: 34 }];

// let arra = [];
// let su = 0;
// const result = abac.flatMap(obj => Object.values(obj)).flat(Infinity).map((item) => {
//     if (item % 2 === 0) {
//         arra.push(item)
//         su += item
//     }
// })

// console.log(arra);
// console.log(su);

// function removeProperty(obj, propToRemove) {
//     if (obj.hasOwnProperty(propToRemove)) {
//       const { [propToRemove]: _, ...rest } = obj;
//       return res
//     }
//     return obj;

//   }
// const obj = { a: 1, b: 2, c: 3 };
// const newObj = removeProperty(obj, 'b');
// console.log(newObj); 


// let array = [1, 2, 3, 4, 5, 6, 7];


// array.map()



// const b = [3,4,3,5,23,42]


// const addarray = b.reduce((acc,cur)=> {
//     return acc+cur
// })
// console.log(addarray)
//   let  sum = 0;
// for ( i=0;i++;i<b.length){
//    sum = sum + b[i]
// }
// console.log(sum)
// let sum = 0;

// for ( let i of b){
//     sum += b[i]
// }
// console.log(sum)

