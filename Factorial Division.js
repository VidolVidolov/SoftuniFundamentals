function factorialDivison(num1, num2) {

    let firstResult = factorelOne(num1);
    let secondResult = factorelTwo(num2);

    let finalResult = firstResult / secondResult;
    console.log(finalResult.toFixed(2));
    
    function factorelOne(num) {

        let result = 1;
        for (let i = num; i >= 1; i--) {
            result *= i;
        }

        return result;
    }

    function factorelTwo(num){
        let result = 1;
        for (let i = num; i >= 1; i--) {
            result *= i;
        }

        return result;
    }

}

factorialDivison(6,2);