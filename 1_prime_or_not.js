let number = 6;
for (let i = 2;i<number;i++){
    if((number%i==0)){
        console.error(number+" is not a prime number.")
    }
    else{
        console.log(number+" is a prime number.")
    }
    break;
}
