/**
 * Comparison between two numbers and print the bigger one
 * a{Int}; //first number
 * b{Int}; //second number
 */
let a = 0;
let b = 150;

if(isNaN(a)){
    console.log("You haven't entered a number.")
    return
}
if(isNaN(b)){
    console.log("You haven't entered a number.")
    return
}

let c = a>b?(a):(b);

console.log(c);