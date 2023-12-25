let a = [];
let number =2000;
while(true){
    let d = number%16;
    number=number-d;
    let i = Number(number/16);
    
    number=i;
    a.push(d)
    if(i==0)break;
}
console.log(a)
 if(i=10)return("A");
 if(i=11)return("B");
 if(i=12)return("C");
 if(i=13)return("D");
 if(i=14)return("E");
 if(i=15)return("F");