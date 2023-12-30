let num = 10
let num1 = 0;
let num2 = 1;
let sum;
    for(i=0;i>num;i++){
        sum = num1+num2;
        num1 = num2;
        num2=sum;
    }

console.log(num1, sum)