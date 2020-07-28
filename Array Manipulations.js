function arrayManipulation(array) {

    let manipulate = array.shift();
    let arrayToManipulate = manipulate.split(' ');
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        let newElement = element.split(' ');
        let command = newElement[0];
        let numberOrIndex = newElement[1];
        let index = newElement[2];

        if (command === `Add`) {
            arrayToManipulate.push(numberOrIndex);
        } else if (command === 'Remove') {
            // for (let i = 0; i < arrayToManipulate.length; i++) {
            //     const element = arrayToManipulate[i];
            //     if(element === numberOrIndex){
            //         arrayToManipulate.splice(element, 1)
            //     }
                
            // }
            arrayToManipulate = arrayToManipulate.filter(el => el !== numberOrIndex);
        }else if (command === 'RemoveAt') {
        arrayToManipulate.splice(numberOrIndex, 1);
    } else if (command === 'Insert') {
        arrayToManipulate.splice(index, 0, numberOrIndex);
    }

}

console.log(arrayToManipulate.join(' '));
}

arrayManipulation(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
)