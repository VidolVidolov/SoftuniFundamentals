function smallestOfThreeNumbers(firstNumber, secondNumber, thirdNumber) {

    let stage1 = checkFirstAndSecond(firstNumber, secondNumber);
    let stage2 = checkElse(stage1, thirdNumber);

    console.log(stage2);


    function checkFirstAndSecond(a, b) {
        if (a > b) {
            return b;
        } else {
            return a;
        }
    }

    function checkElse(a, b) {
        if (a > b) {
            return b;
        } else {
            return a;
        }
    }



}

smallestOfThreeNumbers(600,
    342,
    123
    
);