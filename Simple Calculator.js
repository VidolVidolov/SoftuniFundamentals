function simpleCalculator(firstNum, secondNum, operator) {

    let result = null;
    switch (operator) {
        case 'multiply':
            result = (a, b) => a * b;
            break;
        case 'divide':
            result = (a, b) => a / b;
            break;
        case 'add':
            result = (a, b) => a + b;
            break;
        case 'subtract':
            result = (a, b) => a - b;
            break;
        default:
            break;
    }

    console.log(result(firstNum, secondNum));
    
     
}
simpleCalculator(50,
    13,
    'subtract'
    )
// console.log(simpleCalculator(5,
//     5,
//     'multiply'
// ));
