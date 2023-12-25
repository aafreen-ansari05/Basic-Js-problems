/**
 * If a is greater than b then function returns (a-b) otherwise, it will return (a+b)
 * a and b should be Number or integer
 * @param {Int} a  // first_number
 * @param {Int} b  // second number
 * @return {Int}
 *  */
function sumSubtact(a, b) {

    if (isNaN(a) || isNaN(b)) {
        console.log("Error! this is not a number.")
    }

    let r = a > b ? (a - b) : (a + b);
    return r;

    // if (a > b) {
    //     return a - b;
    // }
    // else {
    //     return a + b;
    // }
}
let f = sumSubtact(10, 20);
console.log(f)
