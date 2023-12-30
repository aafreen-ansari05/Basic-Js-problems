 /**
  * num{Int}
  */
//  let num = 1277;
//  if(isNaN(num)){
//     console.log("Error! You haven't entered a number.")
//  }
// let myArr = String(num).split("").map((num) => {        //converting into array
//     return Number(num)
// })
// const sumofDigits = myArr. reduce((accumulator, e) => accumulator + e, 0);    //Adding elements of array
// console. log(sumofDigits); 



/**
 * Sum of Digits
 * @param {Int} num 
 * @returns {int}
 */
function sumOfDigits(num){
    let sum = 0;

    while(true){
        let d = num % 10 ;  // 8   //7   //2   //1

        sum = sum + d;     //8    8+7 + 2 + 1

        num = num - d     //1270  120  10  0

        if(num ==0) break;    // break at 0

        num = num / 10    // 127  12  1

        
    }

    return sum;

}

let number = 1278;
let sum = sumOfDigits(number);
console.error(sum)



