/**
 * claculation HCF and LCM of two given numbers
 * num1{Int}
 * num{num2}
 */
let num1 = 12;
if(isNaN(num1)){
    console.error("You haven't entered a number.")
}

let num2 = 24;
if(isNaN(num2)){
    console.error("You haven't entered a number.")
}

for(i=1;i<=num1 && i<=num2;i++){
    if(num1%i==0 && num2%i==0){
        HCF = i
    }
}

console.log("HCF of "+num1+ " and "+num2+" is "+ HCF+".");

LCM = (num1*num2)/HCF;
console.log("LCM of "+num1+ " and "+num2+" is "+LCM+".");
