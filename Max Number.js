function maxNumber(arr) {

    let newArr = [];
    let counter = 0;
    let flag = false;
let result = '';
    for (let i = 0; i < arr.length; i++) {
        
        counter = 0;
        for (let j = i + 1; j < arr.length; j++) {

            if (arr[i] > arr[j]) {
                counter++;
            }

        }
        let leftNums = arr.length - (i + 1);
        if (counter === leftNums) {
            newArr.push(arr[i])


        }

    }

    

    for (const iterator of newArr) {
        result += iterator + ' ';
    }
    console.log(result);


}


maxNumber([14, 24, 3, 19, 15, 17]);