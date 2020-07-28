function solve(array) {

    let newArr = [];
    let biggestElement = 0;
    let currBiggest = array[0];
    newArr.push(currBiggest);
    for (let i = 1; i < array.length; i++) {
        if (array[i] < currBiggest) {

        } else {
            newArr.push(array[i]);
            currBiggest = array[i];
        }


    }
    console.log(newArr.join(' '));
}




solve([ 20, 3, 2, 15, 6, 1]);