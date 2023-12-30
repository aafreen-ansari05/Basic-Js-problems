/**
 * To find no of digits in a number
 * num{Int}
 */
let a = [];
function Number(number){

    while(true){
        let d = number % 10 ;  

        number = number - d     
        number = number / 10   
        a.push(d)

        if(number ==0) break;    
    }
}
Number(674792697832978)
let b = a.length;
console.log(b);
