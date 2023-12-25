/**
 * finding area and perimeter of circle
 * @param {Int} r  // radius
 *  return {String}
 * TODO:
 *  check data type inside function
 *  return proper value from function
 *  functiuon name will be in Camel Case and start with VERB [calculateAreaAndParameter]
 */
function areaPerimeter(r){
    if(isNaN(r)){
        console.log("Error! This is not a number.")
        return false;
    }
    return "Area : "+(3.142*r*r)+ "  " +("Perimeter : ")+(6.284*r)
}

let b = areaPerimeter("c");
console.log(b) ;
 