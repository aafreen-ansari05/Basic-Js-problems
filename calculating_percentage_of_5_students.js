
let marks = [20,34,56,78,90]

// let total = marks.reduce((acc,e)=>{
//     return acc+e;
// },0)

let total = marks.reduce((acc,e)=>acc+e,0)

console.log(total/marks.length)