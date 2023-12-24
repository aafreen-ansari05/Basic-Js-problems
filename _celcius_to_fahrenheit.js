/**
 * Conevrt Centigrade to fahrenheit
 * @param {Int} centigrade 
 * @returns {Int}
 */
function centigradeToFahrenheitConvert(centigrade){
    if(isNaN(centigrade)){
        return "Error: You have not entered correct Number";
    }
    return (centigrade*9/5)+32;
 }


 let a = centigradeToFahrenheitConvert("c");
 
 console.log(a)




 /***
  * REVIEW
  * 1) Proper Comment
  * 2) Function Name should be self define
  * 3) Validate Function Parameter expected data type before using it.
  */