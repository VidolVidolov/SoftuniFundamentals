function shoot(array) {

    let targets = array[0].split(' ').map(Number);
    let commands = array.slice(1);
    let flag = true;
    let transition;
    let count = 0;
    for (let i = 0; i < commands.length; i++) {
        let indexShot = commands[i];
        if (indexShot === 'End') {
            flag = false;
            break;
        }
        indexShot = Number(indexShot);
        if (indexShot >= targets.length) {
            continue;
        } else {
            let minus = Number(targets.splice(indexShot, 1, -1));
            for (let k = 0; k < targets.length; k++) {
                if(targets[k] === -1){
                    continue;
                }
                if (minus >= targets[k]) {
                    targets[k] += minus;
                } else {
                    targets[k] -= minus;
                }

            }
            count++;
        }

    }
    if (!flag) {
        console.log(`Shot targets: ${count} -> ${targets.join(' ')}`);

    }


}

shoot([ '30 30 12 60 54 66', '5', '2', '4', '0', 'End' ]

);

