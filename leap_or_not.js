/**
 * Classifying that a year is leap or not
 * Year {Int}\
 * 4 and 400 
 */
let year = 2100;
if(isNaN(year)){
    console.log("you haven't entered a number.")
    return
}
let classifyYear = (year%4==0)?(year + " is a leap year."):(year + " is not a leap year.");
console.log(classifyYear);