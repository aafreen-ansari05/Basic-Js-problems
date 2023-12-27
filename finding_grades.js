/**
 * Giving grades to the students according to their marks 
 */
let markRohan = 90;                         //first student
let markSohan = 60;                         //second student
let markMohan = 70;                         //third student
let markGopal = 80;                         //fourth student
function grade(markRohan){
    if(markRohan > 85 && markRohan < 100)  console.log("Rohan's grade : A");
    else if(markRohan > 70 && markRohan < 84)console.log("Rohan's grade : B");
    else if(markRohan > 55 && markRohan < 69)console.log("Rohan's grade : C")
    else if(markRohan > 45 && markRohan < 54)console.log("Rohan's grade : D");
    else  console.log("Rohan's grade :E");
}
grade(markRohan);


function grade(markSohan){
    if(markSohan > 85 && markSohan < 100)  console.log("Sohan's grade : A");
    else if(markSohan > 70 && markSohan < 84)console.log("Sohan's grade : B");
    else if(markSohan > 55 && markSohan < 69)console.log("Sohan's grade : C")
    else if(markSohan > 45 && markSohan < 54)console.log("Sohan's grade : D");
    else  console.log("Sohan's grade : E");
}
grade(markSohan);


function grade(markMohan){
    if(markMohan > 85 && markMohan < 100)  console.log("Mohan's grade : A");
    else if(markMohan > 70 && markMohan < 84)console.log("Mohan's grade : B");
    else if(markMohan > 55 && markMohan < 69)console.log("Mohan's grade : C")
    else if(markMohan > 45 && markMohan < 54)console.log("Mohan's grade : D");
    else  console.log("Mohan's grade : E");
}
grade(markMohan);


function grade(markGopal){
    if(markGopal > 85 && markGopal < 100)  console.log("Gopal's grade : A");
    else if(markGopal > 70 && markGopal < 84)console.log("Gopal's grade : B");
    else if(markGopal > 55 && markGopal < 69)console.log("Gopal's grade : C")
    else if(markGopal > 45 && markGopal < 54)console.log("Gopal's grade : D");
    else  console.log("Gopal's grade : E");
}
grade(markGopal);

