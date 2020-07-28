function solve(number){

    let numberToString = number.toString();
    let transition = 0;
    let sum = 0;
    for (let i = 0; i < numberToString.length; i++) {
        transition = Number(numberToString[i]);
        sum += transition;
        
    }
    console.log(sum);
    

}

solve(97561);