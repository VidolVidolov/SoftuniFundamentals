function train(array) {

    let copyArr = array.slice();
    let train = copyArr.shift().split(' ').map(Number);
    let maxCapacity = Number(copyArr.shift());

    for (let i = 0; i < copyArr.length; i++) {
        let element = copyArr[i].split(' ');
        let command = element[0];

        if (command === 'Add') {
            train.push(element[1]);
        } else {
            command = Number(command);
            for (let j = 0; j < train.length; j++) {
                let element = Number(train[j]);
                if((element + command) <= maxCapacity){
                    element += command;
                    train[j] = element;
                    break;
                }
            }
        }

    }
    console.log(train.join(' '));
    
}

train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
);