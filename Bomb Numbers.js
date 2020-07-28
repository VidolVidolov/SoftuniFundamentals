function bombNumber(array, bombi) {

    let bomb = bombi[0];
    let explosion = bombi[1];
    let index = array.indexOf(bomb);
    for (let i = 0; i < array.length; i++) {

        if (array.includes(bomb)) {
            index = array.indexOf(bomb);
            array.splice(Math.max(index - explosion, 0), Math.min(explosion, index));
            index = array.indexOf(bomb);
            array.splice(index, explosion + 1);
            index = array.indexOf(bomb);
        }

    }
    let sum = 0;
    for (const iterator of array) {
        sum += iterator;
    }
    console.log(sum);


}

bombNumber([1, 4, 4, 2, 8, 9, 1],
    [9, 3]

)