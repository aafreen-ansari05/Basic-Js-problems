/**
 * Converting decimal number into Hexa.
 */
let a = [];
let number =2000;
while(true){
    let d = number%16;
    number=number-d;
    let i = Number(number/16);
    
    number=i;
    if(d==10) a.push("A");
    else if(d==11) a.push("B");
    else if(d==12) a.push("C");
    else if(d==13) a.push("D");
    else if(d==14) a.push("E");
    else if (d==15) a.push("F");
    else a.push(d)
    if(i==0)break;
    
}
console.log(a.reverse())


