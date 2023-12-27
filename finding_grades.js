/**
 * Giving grades to the students according to their marks 
 */
let markRohan = 90;                         //first student
let markSohan = 60;                         //second student
let markMohan = 70;                         //third student
let markGopal = 80;                         //fourth student
function grade1(marks){
    if(marks > 85 && marks < 100)  console.log(" grade : A");
    else if(markRohan > 70 && markRohan < 84)console.log("grade : B");
    else if(markRohan > 55 && markRohan < 69)console.log("grade : C")
    else if(markRohan > 45 && markRohan < 54)console.log("grade : D");
    else  console.log("Rohan's grade :E");
}
grade1(markRohan);
grade1(markSohan);


