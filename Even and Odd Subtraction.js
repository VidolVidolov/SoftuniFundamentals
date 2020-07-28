function solve(numbers) {

    let sumEven = 0;
    let sumOdd = 0;

    for (const number of numbers) {

        if (number % 2 === 0) {
            sumEven += number;
        } else {
            sumOdd += number;
        }
    }
    let result = sumEven - sumOdd;
    console.log(result);
    

}

solve([1, 2, 3, 4, 5, 6]);