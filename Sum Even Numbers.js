function solve(numbers) {

    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = Number(numbers[i]);
        if(numbers[i] % 2 === 0){
            sum += numbers[i];
        }

    }

    console.log(sum);
    



}

solve(['3','5','7','9']);