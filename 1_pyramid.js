
function pyramid() {
    let numberofRows = 5;
    let a = '';
    for (let i = 1; i <= numberofRows; i++) {
        for (let j = 1; j <= i; j++) {
            a += j + '  ';
        }
        console.log(a);
        a = '';
    }
}

pyramid();