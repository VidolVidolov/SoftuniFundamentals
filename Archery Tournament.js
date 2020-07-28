function solve(array) {

    let targets = array[0].split('|').map(Number);
    let commands = array.slice(1);
    let points = 0;

    for (let i = 0; i < commands.length; i++) {
        let element = commands[i].split('@');
        let direction = element[0];
        let index = Number(element[1]);
        let length = Number(element[2]);

        if (direction === 'Game over') {
            break;
        }
        if (index < 0 || index >= targets.length) {
            continue;
        }
        if (direction === 'Shoot Left') {
            let newIndex = (index + length) % targets.length;
            let diff = newIndex - index;
            if (index - newIndex < 0) {
                targets.splice((targets.length - diff), 1, targets[targets.length - diff] - 5);
                points += 5;
                if (targets[targets.length - diff] <= 0) {
                    if (targets[targets.length - diff] > -5) {
                        targets[targets.length - diff] = 0;

                    } else {
                        targets[targets.length - diff] = 0;
                        points -= 5;
                    }
                }
            } else {
                targets.splice(newIndex, 1, targets[newIndex] - 5);
                points += 5;
                if (targets[newIndex] <= 0) {
                    if (targets[newIndex] > -5) {
                        targets[newIndex] = 0;
                    } else {
                        targets[newIndex] = 0;
                        points -= 5;
                    }
                }
            }

        } else if (direction === 'Shoot Right') {
            let newIndex = (index + length) % targets.length;
            targets.splice(newIndex, 1, targets[newIndex] - 5);
            points += 5;
            if (targets[newIndex] <= 0) {
                if (targets[newIndex] > -5) {
                    targets[newIndex] = 0;
                } else {
                    targets[newIndex] = 0;
                    points -= 5;
                }
            }
        } else if (direction === 'Reverse') {
            targets.reverse();
        }

    }
    console.log(targets.join(' - '));
    console.log(`Iskren finished the archery tournament with ${points} points!`);

}

solve([
        '2|2|2|2|2',
        'Shoot Left@0@0',
        'Shoot Right@1@0',
        'Shoot Right@2@0',
        'Shoot Right@3@0',
        'Shoot Right@4@0',
        'Shoot Left@0@5',
        'Reverse',
        'Game over',
        ''
    ]
);