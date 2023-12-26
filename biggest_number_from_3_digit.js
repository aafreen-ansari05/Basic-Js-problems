/**
 * Finding the biggest number among three numbers 
 * 
 */
let a = 300;            //first number
let b = 200;            //second number
let c = 500;            //third number
 if (a>b && a>c){       //&& operator : to find which consition is true
    largest = a;
 }
 else if (b>a && b>c){
     largest = b;
 }
 else {
    largest = c;
 }
 console.log( "Largest Number : "+largest)