/**
 * product of digits of numbers i.e., 234 = 2*3*4 = 24
 * num{Int}
 */
let num = 1237;
 if(isNaN(num)){
    console.log("Error! You haven't entered a number.")
 }
let myArr = String(num).split("").map((num) => {        //converting into array
    return Number(num)
})
const productofDigits = myArr. reduce((accumulator, e) => accumulator*e, 1);    //Multiplying elements of array
console. log(productofDigits);