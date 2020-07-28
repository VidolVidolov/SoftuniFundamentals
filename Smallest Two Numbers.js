function smallestTwoNumbers(array) {

    let sorted = (a, b) => a - b;

    let sortedArr = array.sort(sorted);
    console.log(`${sortedArr[0]} ${sortedArr[1]}`);
    
}

smallestTwoNumbers([30, 15, 50, 5]);