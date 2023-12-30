/**
 * creating a fibonacci series
 * num1{Int}
 * num2{Int}
 */
let a=[0, 1];
let num1 = 0;
if(isNaN(num1)){
    console.error("Error! You haven;t entered a number.")
}
let num2 = 1;
if(isNaN(num2)){
    console.error("Error! You haven;t entered a number.")
}
function fibonacci(num){

    for(i=0;i<num;i++){
        let sum = num1+num2;
        num1 = num2;
        num2=sum;
        a.push(num2);
    }
}
 fibonacci(10);
console.log(a);