function solve(array) {

    let newArray = [];
    let looping = Math.ceil(array.length / 2);
    let result = '';

    for (let i = 0; i < looping; i++) {
        newArray[i] = array[array.length - 1 - i]
        newArray[array.length - 1 - i] = array[i];

    }

    for (let char of newArray) {
        result += char + ' ';
    }
    console.log(result);


}

solve(['abc', 'def', 'hig', 'klm', 'nop']);