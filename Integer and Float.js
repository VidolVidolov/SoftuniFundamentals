function solve(firstNumber, secondNumber, thirdNumber){

    let sum = firstNumber + secondNumber + thirdNumber;

    if(sum % 1 !== 0){
        console.log(`${sum} - Float`);
    }else{
        console.log(`${sum} - Integer`);
        
    }


}

solve(100, 200, 303);