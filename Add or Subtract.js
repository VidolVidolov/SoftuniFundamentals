function solve(arr) {

    let newArr = [];
    let sum = 0;
    let sumOriginal = 0;
    let result = '';
    for (let i = 0; i < arr.length; i++) {

        let currentItem;

        if (arr[i] % 2 === 0) {
            currentItem = arr[i] + i;
            sum += currentItem;
            sumOriginal += arr[i];
            newArr[i] = currentItem;
        } else {
            currentItem = arr[i] - i;
            sum += currentItem;
            sumOriginal += arr[i];
            newArr[i] = currentItem;
        }

    }


    console.log(newArr);
    console.log(sumOriginal);
    console.log(sum);
}

solve([5, 15, 23, 56, 35]);