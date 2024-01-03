let n = 6;
let r = 2;
let f =1;
for (let txt= n;txt>=1;txt -= 1){
   f = f * txt;                       
}
// console.error(f);


let b = (n-r);
let f1 = 1;
for (let txt=b; txt>=1;txt -= 1){
    f1 = f1 * txt;                       
 }
// console.error(f1);

console.log(f/f1)