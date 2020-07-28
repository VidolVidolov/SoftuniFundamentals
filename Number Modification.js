function getSum(number) {
    let stringNumber = number.toString();
    let sum = 0;
    for (let i = 0; i < stringNumber.length; i++) {
        let element = Number(stringNumber[i]);
        sum += element;
    }

    return sum;
}

function avg(num) {
    return getSum(num) / num.toString().length;
}



function solve(number) {

    while (avg(number) < 5) {
        number += `9`;
    }
    return number;
}

//solve(101);
console.log(solve(101));
