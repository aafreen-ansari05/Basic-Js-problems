let a=[0, 1];
let num1 = 0;
let num2 = 1;
function fibonacci(num){

    for(i=0;i<num;i++){
        let sum = num1+num2;
        num1 = num2;
        num2=sum;
        a.push(num2);
    }
}
 fibonacci(10);
console.log(a);