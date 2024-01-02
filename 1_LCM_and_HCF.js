let num1 = 12;
let num2 = 24;
for(i=1;i<=num1 && i<=num2;i++){
    if(num1%i==0 && num2%i==0){
        HCF = i
    }
}
console.log("HCF of "+num1+ " and "+num2+" is "+ HCF+".");
LCM = (num1*num2)/HCF;
console.log("LCM of "+num1+ " and "+num2+" is "+LCM+".");
