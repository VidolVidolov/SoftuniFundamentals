function target(array) {

    let targets = array[0].split(' ').map(Number);
    let commands = array.slice(1);

    for (let i = 0; i < commands.length; i++) {
        let element = commands[i].split(' ');
        let action = element[0];
        let index = Number(element[1]);
        let number = Number(element[2]);
        if (action === 'End') {
            console.log(targets.join('|'));

            break;
        }
        for (let j = 0; j < targets.length; j++) {
            if (action === 'Shoot') {
                if (index >= targets.length) {
                    break;
                }
                if (index === j) {
                    targets[j] -= number;
                    if (targets[j] <= 0) {
                        let removed = targets.splice(index, 1);
                        break;
                    }
                }
            } else if (action === 'Add') {
                if (index >= targets.length || index < 0) {
                    console.log(`Invalid placement!`);
                    break;
                }
                if (index === j) {
                    targets.splice(index, 0, number);
                    break;
                }
            } else if (action === 'Strike') {
                if (index + number >= targets.length || index - number < 0) {
                    console.log(`Strike missed!`);
                    break;
                } else {
                    let num = targets[index];
                    targets.splice(index - number, number);
                    let indexNew = targets.indexOf(num);
                    targets.splice(indexNew, number + 1);
                    break;
                }
            }

        }

    }


}


target([
    '52 74 23 44 96 110',
    'Shoot 5 10',
    'Shoot 1 80',
    'Strike 2 1',
    'Add 22 3',
    'End'
]


);