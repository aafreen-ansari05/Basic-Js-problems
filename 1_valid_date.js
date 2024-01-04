/**
 * checking that the given date is valid or not
 * Date{Int}
 * Month{Int}
 * Year{Int}
 */
const Date = [24];
if(isNaN(Date)){
    console.error("You haven't entered a number")
}

const Month = [2];
if(isNaN(Month)){
    console.error("You haven't entered a number")
}

const Year = [2023];
if(isNaN(Year)){
    console.error("You haven't entered a number")
}


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