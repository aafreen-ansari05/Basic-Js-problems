// const Date1 = [24];
// const Month1 = [2];
// const Year1= [2023];


// const Date2 = [4];
// const Month2 = [12];
// const Year2= [2022];
// const differenceBetweenDates = (Date1-Date2);
// console.log(differenceBetweenDates);


// const differenceBetweenMonths = (Month1-Month2);
// console.log(differenceBetweenMonths);


// const differenceBetweenYears = (Year1-Year2);
// console.log(differenceBetweenYears);
var d1 = new Date("08/14/2010"); 
var d2 = new Date("09/14/2020"); 

var diff = d2.getTime() - d1.getTime(); 
var daydiff = diff / (3.156e+7); 
console.log(daydiff);
