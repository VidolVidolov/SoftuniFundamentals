function ladyBugs(array) {
    let field = [];

    for (let index = 0; index < array[0]; index++) {
        field[index] = 0;
    }

    let startingPositions = array[1].split(' ');
    for (let index = 0; index < field.length; index++) {
        let startP = Number(startingPositions[index]);
        if (index === startP && startP >= 0) {
            field[index] = 1;
        } else {
            field[index] = 0;
        }

    }

    for (let i = 2; i < array.length; i++) {
        let element = array[i].split(' ');
        let position = Number(element[0]);
        let direction = element[1];
        let step = Number(element[2]);

        if (position !== 1 || position >= field.length || position < 0) {
            continue;
        }
        if (direction === 'right') {
            if (step < 0) {
                step = Math.abs(step);
                direction = 'left';
            }
        } else if (direction === 'left') {
            if (step < 0) {
                step = Math.abs(step);
                direction = 'right';
            }
        }

        field[position] = 0;
        if (direction === 'right') {
            let newPosition = position + step;
            if (field[newPosition] === 1) {
                newPosition = newPosition + step;
            }
            if (newPosition <= field.length){
                field[newPosition] = 1;
            }
        } else if(direction === 'left'){
            let newPosition = position - step;
            if (field[newPosition] === 1) {
                newPosition = newPosition - step;
            }
            if (newPosition >= 0){
                field[newPosition] = 1;
            }
        }



    }

    console.log(field.join(' '));

}
ladyBugs([ 5, '3',
'3 left 2',
'1 left -2']);