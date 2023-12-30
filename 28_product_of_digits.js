/**
 * product of digits of numbers i.e., 234 = 2*3*4 = 24
 * num{Int}
 */
function productOfDigits(num){
    let product = 1;

    while(true){
        let d = num % 10 ; 

        product = product*d;    

        num = num - d     

        if(num ==0) break;    

        num = num / 10    

        
    }

    return product;

}

let number = 1278;
let product = productOfDigits(number);
console.error(product)

