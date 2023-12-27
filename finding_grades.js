let markRohan = 50;
let markSohan = 60;
let markMohan = 70;
let markGopal = 80;
function grade(markRohan){
    if(markRohan > 85 && markRohan < 100)  console.log("A");
    else if(70-84) console.log("B");
    else if(55-69) console.log("C")
    else if(45-54)  console.log("D");
    else  console.log("E");
}
grade(markRohan);
grade(markSohan);
grade(markMohan);
grade(markGopal);

