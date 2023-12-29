/**
 * Total sum of cube of digits in a number
 * number{Int} 
 */
let Sum = [];                                 //Empty array
let number = 223;
if(isNaN(number)){
    console.log("Error! You haven't entered a number.")
}
while(true){
    let remainder = number%10; 
    //After getting the remainder, we need to cube the digits                  
    let cube = remainder*remainder*remainder
    number = number-remainder;                  //now the new number is difference of remainder from previous number
    let Quotient = Number(number/10);           
    
    number=i;
    Sum.push(cube);
    if (Quotient==0)break;                   //breaking the while loop when quotient will become 0               
}
const sumofcubesofdigit = Sum. reduce((accumulator, e) => accumulator + e, 0);      //sum of the cube of digits using reduce method
console.log(sumofcubesofdigit);