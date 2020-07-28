function solve(array){

    let firstNumber = Number(array.shift());
    let lastNumber = Number(array.pop());

    let sum = firstNumber + lastNumber;
    return sum;



}


solve(['20', '30', '40'])