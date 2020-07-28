function ladyBugs(input) {

    let field = input.shift();
    let ladyBugsField = [];

    for (let i = 0; i < field; i++) {
        ladyBugsField[i] = i + '';

    }

    let startPositions = input.shift();
    let innerCounter = 0;
    let separatePositions = [];
    for (let i = 0; i < startPositions.length; i++) {
        if (startPositions[i] === ' ') {

        } else {
            separatePositions[innerCounter] = Number(startPositions[i]);
            innerCounter++;
        }

    }
    innerCounter = 0;
    separatePositions.sort();
    
    for (let i = 0; i < ladyBugsField.length; i++) {
        if (i === Number(separatePositions[innerCounter])) {
            ladyBugsField[i] = 'ladybug';
            innerCounter++;
        } else {
            ladyBugsField[i] = i;
        }

    }

    let currentBug = '';
    let step;
    let way = '';
    innerCounter = 0;
    let newMove = [];
    let flag = false;
    for (let i = 0; i < input.length; i++) {
        let element = input[i];
        

        if (element.includes('right')) {
            way = 'right';
        } else if (element.includes('left')) {
            way = 'left';
        }
        currentBug = element[0];
        step = element[element.length - 1];
        if (element.includes('-')) {
            step = '-' + step;
        }
        for (let j = Number(currentBug); j < ladyBugsField.length; j++) {
            if(ladyBugsField[j] !== "ladybug"){
                break;
            }
            if (way === 'right') {
                if (Number(step) < 0) {
                    if (ladyBugsField[j - Number(step)] === 'ladybug') {
                        ladyBugsField[j - (Number(step))] = 'ladybug';
                        ladyBugsField[j - (Number(step))] = 'ladybug';
                        ladyBugsField[j] = j;
                        innerCounter++;
                        break;
                    } else if (ladyBugsField[j - Number(step)] >= ladyBugsField.length) {
                        ladyBugsField[j] = j;
                        innerCounter++;
                        break;
                    }
                    else {
                        ladyBugsField[j - step] = 'ladybug';
                        ladyBugsField[j] = j;
                        innerCounter++;
                        break;
                    }
                } else {
                    if (ladyBugsField[j + Number(step)] === 'ladybug') {
                        ladyBugsField[j + (Number(step))] = 'ladybug';
                        ladyBugsField[j + (Number(step))] = 'ladybug';
                        ladyBugsField[j] = j;
                        innerCounter++;
                        break;
                    } else if (j + Number(step) >= ladyBugsField.length) {
                        ladyBugsField[j] = j;
                        innerCounter++;
                        break;
                    }
                    else {
                        ladyBugsField[j + Number(step)] = 'ladybug';
                        ladyBugsField[j] = j;
                        innerCounter++;
                        break;
                    }
                }

            } else if (way === 'left') {
                if (Number(step < 0)) {
                    step = Math.abs(step);
                    if (ladyBugsField[j + Number(step)] === 'ladybug') {
                        ladyBugsField[j + (Number(step))] = 'ladybug';
                        ladyBugsField[j + (Number(step))] = 'ladybug';
                        ladyBugsField[j] = j;
                        innerCounter++;
                        break;
                    } else if (j + Number(step) >= ladyBugsField.length) {
                        ladyBugsField[j] = j;
                        innerCounter++;
                        break;
                    }
                    else {
                        ladyBugsField[j + Number(step)] = 'ladybug';
                        ladyBugsField[j] = j;
                        innerCounter++;
                        break;
                    }
                } else {
                    if (ladyBugsField[j - Number(step)] === 'ladybug') {
                        ladyBugsField[j - (Number(step))] = 'ladybug';
                        ladyBugsField[j - (Number(step))] = 'ladybug';
                        ladyBugsField[j] = j;
                        innerCounter++;
                        break;
                    } else if (ladyBugsField[j - Number(step)] >= ladyBugsField.length) {
                        ladyBugsField[j] = j;
                        innerCounter++;
                        break;
                    }
                    else {
                        ladyBugsField[j - step] = 'ladybug';
                        ladyBugsField[j] = j;
                        innerCounter++;
                        break;
                    }
                }

            }

        }

    }

    for (let i = 0; i < ladyBugsField.length; i++) {
        if (ladyBugsField[i] === 'ladybug') {
            ladyBugsField[i] = 1;
        } else {
            ladyBugsField[i] = 0;
        }

    }
    console.log(ladyBugsField.join(' '));

}

ladyBugs([ 5, '3 2',
'250 left 2',
'1 left -250']





);