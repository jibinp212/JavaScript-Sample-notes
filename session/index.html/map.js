// let myMap = new Map();

// // Add key-value pairs to the map
// myMap.set('name', 'John');
// myMap.set('age', 30);
// myMap.set('occupation', 'Engineer');

// // Retrieve values from the map
// console.log(myMap.get('name')); // Output: John
// console.log(myMap.get('age')); // Output: 30
// console.log(myMap.get('occupation'));


// let myMap = new Map();

// myMap.set('A', 1);
// myMap.set('B', 2);
// myMap.set('C', 3);

// myMap.forEach((value, key) => {
//   console.log(`Key: ${key}, Value: ${value}`);
// });


// Create a new Map object and chain multiple set() calls to add key-value pairs
// let myMap = new Map()
//   .set('key1', 'value1')
//   .set('key2', 'value2')
//   .set('key3', 'value3');

// // Retrieve values from the map
// console.log(myMap.get('key1')); // Output: value1
// console.log(myMap.get('key2')); // Output: value2
// console.log(myMap.get('key3')); // Output: value3


// const map = new Map();

// const key1 = [1, 2, 3];
// const key2 = [1, 2, 3];
// const value = 'Value';

// map.set(key1, value);

// console.log(map.get(key1)); // Output: Value
// console.log(map.get(key2)); // Output: undefined


// const myMap = new Map();
// myMap.set('name', 'John');
// myMap.set('age', 30);

// myMap.forEach((value, key) => {
//     console.log(`${key}: ${value}`);
// });

// const myObject = {
//     key1: 'value1',
//     key2: 'value2',
//     key3: 'value3'
//   };
  
//   const myMap = new Map(Object.entries(myObject));
  
//   console.log(myMap);
  

// map to Array

// const mymap = new Map();

// mymap.set('name', 'jibi')
// mymap.set( 'key1 ', 'jibi')
// mymap.set(1, 'jibi')

// const map= Array.from(mymap)
// console.log(map)

// WeakMap
// Create a WeakMap

// const myWeakMap = new WeakMap();

// const key1 = {};
// const key2 = {};

// myWeakMap.set(key1, 'value1');
// myWeakMap.set(key2, 'value2');
// console.log(myWeakMap.get(key1));
// myWeakMap.delete(key1);
// console.log(myWeakMap.has(key1));


