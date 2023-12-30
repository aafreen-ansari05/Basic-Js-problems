let Sum = [];                                 //Empty array
let number = 222343;
if(isNaN(number)){
    console.log("Error! You haven't entered a number.")
}
while(true){
    let remainder = number%10;                   
    number = number-remainder;                  
    let Quotient = Number(number/10);           
    
    number=Quotient;
    Sum.push(remainder);
    if (Quotient==0)break;                               
}
const sumofdigit = Sum. reduce((accumulator, e) => accumulator + e, 0);      
console.log(sumofdigit);
