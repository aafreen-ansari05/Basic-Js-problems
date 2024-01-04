/**
 * Testing a given number is prime or not
 * number{Int}
 */
let number = 6;
if(isNaN(number)){
    console.log("You haven't entered a number.")                
}
for (let i = 2;i<number;i++){
    if((number%i==0)){
        console.error(number+" is not a prime number.")
    }
    else{
        console.log(number+" is a prime number.")
    }
    break;
}
