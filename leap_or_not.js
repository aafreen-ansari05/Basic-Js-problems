/**
 * Classifying that a year is leap or not
 * Year {Int}\
 */
let year = "a";
if(isNaN(year)){
    console.log("you haven't entered a number.")
    return
}
let classifyYear = (year%4==0)?(year + " is a leap year."):(year + " is not a leap year.");
console.log(classifyYear);