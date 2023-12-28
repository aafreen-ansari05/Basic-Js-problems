/**
 * To find no of digits in a number
 * num{Int}
 */
const num = 12;
if(isNaN(num)){
    console.log("Error! You haven't entered a number.")
}
let myArr = String(num).split("").map((num) => {        //converting into array
    return Number(num)
})
console.log(myArr.length);