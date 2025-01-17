console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());
hello ();


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  console.log ( 'Hello' + name );
  return;
}
// Remember to call the function to test
helloName (' Jack');


// 3. Function to add two numbers together & return the result
function add(a, b){
  let result = a + b;
   console.log('result', result);
  return result;
}
add(2,2);

// 4. Function to multiply three numbers & return the result
function multiplyThree(x,y,z){
 let answer = x * y * z
 console.log('result', answer);
 return answer
}
multiplyThree (2,2,2,)


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if ( (number) % 2 == 0 && (number) > 0){
    return true
  }
  else (number = false );
    return false
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(4) );
console.log( 'isPositive - should say false', isPositive(2) );
console.log( 'isPositive - should say false', isPositive(-3) );

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
randNum = [1,69,32,20,7];
function getLast( ) {
  console.log('in the function')
  lastItem = randNum.slice(-1);
  if (randNum.length - 1 > 0 ){
    return randNum
  }
  else {
    return 'undefined'
  }
}
console.log(getLast([]));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

numberArray= [1,2,3,4,5];
function find( value, array ){
  let check = false;

for (let i = 0; i < numberArray.length; i++ ){
  //todo forloop

if (value === [i]) {
     check = true; }
     return check
}
}
find(3 , numberArray)
// ----------------------
// Stretch Goals
// ----------------------
// // 8. Function to check if a letter is the first letter in a 
// //    string. Return true if it is, and false otherwise
// function isFirstLetter(letter, string) {

// }
// console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
// console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// // 9. Function to return the sum of all numbers in an array
// function sumAll( ) {
//   let sum = 0
//   // TODO: loop to add items
//   return sum;
// }

// // 10. Function to return a new array of all positive (greater than zero)
// //     numbers contained in an input array. If there are no positive numbers
// //     return an empty array. Note: The input array should not change.



// // 11. Pick a problem from Edabit(https://edabit.com/) or 
// //     CodeWars(https://www.codewars.com/). Then describe it 
// //     here in a comment, write the function, and test it
