// function fet(callback) {
//     setTimeout(function() {
//         const data = "This is some data fetched from a server";
//         callback(data); 
//     }, 2000);
// }

// function proD(data) {
//     console.log("Processing data:", data.toUpperCase());
// }
// fet(proD);


// function jibin(callback){
//     callback()
// }

// function shibin (){
//     console.log("shibin ")
// }

// jibin(shibin)


// function gr(call) {
//     console.log('Hi ');
//     call();
// }

// function say() {
//     console.log('Goodbye!');
// }
// gr(say);


// function greet(name, callback) {
//     console.log('Hi ' + name);
//     callback();
// }
// function sayGoodbye() {
//     console.log('Goodbye!');
// }
// greet('John', sayGoodbye);




// function mainFunction(callback) {
//     const numbers = [1, 2, 3, 4, 5];
//     setTimeout(function() {
//       numbers.forEach(callback);
//     }, 1000);
//   }
//   function callbackFunction(number) {
//     console.log(`Result: ${number}`);
//   }
//   mainFunction(callbackFunction);

// function mainFunction (callback) {
//     const number = [1,2,3,4,5,6];
//     setTimeout(() => {
//         number.forEach(callback)
//     }, 2000);
// }
// function callbackFunction (number){
//     console.log( `Result : ${number}` )
// }
// mainFunction(callbackFunction)