// function greet(a,b,c){
//     console.log(a,b,c)
//     console.log(this.name)
//     console.log(this.age)
// }
// const person = {
//     name: 'John',
//     age: 33,
// };
// const person2 = {
//     name: 'Jibin',
//     age:20,
// };
// greet.call(person,2,1,3,);
// greet.apply(person2,[1,2,3])


// const newGreet = greet.bind(person);
// newGreet()


// (function hello(){
//     console.log("hello World")
// })();


// closure 
// function add(a, b) {
//     function myAdd() {
//         const c = a + b;
//         return c;
//     }
//     return myAdd
// }
// function main() {
//     const res = add(3, 4)
//     const val=res();

//     console.log(val)
// }
// main()

// function jibin() {
//     const chinnu = 'Kunjappy ';
//     function shibin() {
//         console.log(chinnu);
//     }
//     return shibin;
// }
// var clos = jibin ();
// clos();

// function outerFunction() {
//     var outerVariable = 'I am from the outer function';
  
//     function innerFunction() {
//       console.log(outerVariable); // Accesses outerVariable from the outer function's scope
//     }
  
//     // Return the inner function
//     return innerFunction;
//   }
  
//   var closureFunction = outerFunction();
  
//   closureFunction();


// function add(a, y,z) {
//     return a+ y+z;
//   }
//   function adcu(x) {
//     return function(y) {
//       return function(z){
//         return x + y+z;
//       }
      
//     };
//   }
//   const addFive = adcu(6);
//   console.log(addFive(3)(1));