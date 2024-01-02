const Date = [24];
const Month = [2];
const Year = [2023];
if(Date>31){
    console.log("Your date is not valid")
}
if(Month>12){
    console.log("Your month is not valid")
}
if(Year>2023){
    console.log("Your year is not valid")
}
const join = Date.concat(Month,Year);
const joinWith = join.join("/");
console.log(joinWith)