function equalOrNot(arr1, arr2) {

    let sum = 0;
    let difference = 0;
    let flag = true;
    
    for (let i = 0; i < arr1.length; i++) {
        arr1[i] = Number(arr1[i]);
        arr2[i] = Number(arr2[i]);

        if (arr1[i] === arr2[i]) {
            sum += arr1[i];
        } else {
            difference = i;
            flag = false;
            break;
        }

    }

    if (!flag) {
        console.log(`Arrays are not identical. Found difference at ${difference} index`);
    } else {
        console.log(`Arrays are identical. Sum: ${sum}`);

    }

}

equalOrNot(['1'], ['10']);