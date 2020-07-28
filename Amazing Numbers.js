function solve(number) {

    let numberString = number.toString();
    let sum = 0;
    for (let i = 0; i < numberString.length; i++) {

        sum += Number(numberString[i]);

    }
    
    let result = sum.toString().includes("9")

    if (result) {
        console.log(`${number} Amazing? True`);

    } else {
        console.log(`${number} Amazing? False`);


    }

}

solve(1233);