function sorting(array) {
    let smallestToBiggest = array.slice();
    let biggestToSmallest = array.slice();
    smallestToBiggest = smallestToBiggest.sort((a, b) => a - b);

    let result = [];
    let lentght = array.length / 2;
    for (let i = 0; i < lentght ; i++) {
        let biggest = smallestToBiggest.pop();
        let smallest = smallestToBiggest.shift();
        result.push(biggest, smallest);
    }

    console.log(result.join(' '));
    
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94,2]);