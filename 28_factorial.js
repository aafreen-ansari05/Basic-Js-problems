/**
 * factorial of number 
 */
let number = [];                              //empty Array  

for (let txt= 5;txt>=1;txt -= 1){
    number.push(txt);                         //pushing elements into array
}
console.error(number);
const factorial = number.reduce((accumulator, e) => accumulator*e, 1);      //Multiplying digits of array

console.error(factorial);