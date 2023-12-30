// 538769 => 38=> 11=> 2

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

let number = 538769;
let sum = sumOfDigits(number);
console.error(sum)
while(sum > 10){    
    sum = sumOfDigits(sum);
    console.error(sum)
}