 /**
  * num{Int}
  */
 let num = 127;
 if(isNaN(num)){
    console.log("Error! You haven't entered a number.")
 }
let myArr = String(num).split("").map((num) => {        //converting into array
    return Number(num)
})
const sumofDigits = myArr. reduce((accumulator, e) => accumulator + e, 0);    //Adding elements of array
console. log(sumofDigits); 