function reverse(length, array) {

    let newArray = [];
    let result = "";
    for (let i = 0; i < length; i++) {
        newArray[i] = array[i];
    }

    for (let i = newArray.length - 1; i >= 0; i--) {
        result += newArray[i] + " ";

    }
    console.log(result);


}

reverse(3, [10, 20, 30, 40, 50]);