function solve(input) {

    let array = input[0].split(' ').map(Number);
    let actions = input.slice(1);

    for (let i = 0; i < actions.length; i++) {
        let element = actions[i].split(' ');
        let command = element[0];
        let index1 = Number(element[1]);
        let index2 = Number(element[2]);

        if (command === 'end') {
            break;
        }

        if (command === 'swap') {

            let firstNum = array[index1];
            let secondNum = array[index2];

            array.splice(index1, 1, secondNum);
            array.splice(index2, 1, firstNum);
        } else if (command === 'multiply') {
            let firstNum = array[index1];
            let secondNum = array[index2];

            let result = firstNum * secondNum;
            array.splice(index1, 1, result);
        } else if (command === 'decrease') {
           array =  array.map(x => x - 1);
        }

    }

    console.log(array.join(', '));
    

}

solve([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]
);