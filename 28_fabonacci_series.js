let num1 = 0;
let num2 = 1;
function fibonacci(num){

    for(i=0;i>num;i++){
        let sum = num1+num2;
        num1 = num2;
        num2=sum;
    }
}
let g = fibonacci(4)
console.log(g);