/**
 * Total sum of cube of digits in a number
 * number{Int} 
 */
let sum = 0;                                 //Empty array
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
    
    number=Quotient;
    sum = sum + cube;
    if (Quotient==0)break;                   //breaking the while loop when quotient will become 0               
}
console.log(sum);