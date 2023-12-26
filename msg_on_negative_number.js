/**
 * If you enter any negative number,then "d" will send you a msg that "You have entered a negative number." 
 * number{Int}
 */
let number =1;
if(isNaN(number)){
    console.log("You haven't entered a number.")
    return
}
let d = (number<0)?("You have entered a negative number."):("You have entered a positive number.");
console.log(d)