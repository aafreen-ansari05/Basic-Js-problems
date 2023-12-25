/**
 * Calculating quotient and remainder of given number
 * a={Int} //Dividend
 * @param {Int} a 
 * @returns {string}
 */
function num(a){
    if(isNaN(a)){
        console.log("Error! You haven't entered a number.")
        return
    }
    return ("Quotient: "+(a/2)+"   Remainder: "+(a%2))
}
let b = num(24);
console.log(b)