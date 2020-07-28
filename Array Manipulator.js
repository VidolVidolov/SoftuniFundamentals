function manipulator(numArr, stringArr) {

    let copiedNums = numArr.slice();
    let command = '';
    let newArr = [];
    let counter = 0;
    let flag = true;
    for (let i = 0; i < stringArr.length; i++) {
        let element = stringArr[i].split(' ');
        command = element[0];
        if (command === 'add') {
            copiedNums.splice(element[1], 0, Number(element[2]));
        } else if (command === 'addMany') {
            for (let k = 2; k < element.length; k++) {
                newArr.push(Number(element[k]));
            }
            for (let j = newArr.length -1 ; j >= 0; j--) {
                copiedNums.splice(Number(element[1]), 0, newArr[j]);
            }
            newArr = [];
            

        } else if (command === 'contains') {
            if (copiedNums.indexOf(element[1])) {
                console.log(copiedNums.indexOf(Number(element[1])));
            }
        } else if (command === 'remove') {
            copiedNums.splice(element[1], 1);
        } else if (command === 'shift') {
            for (let k = 0; k < element[1]; k++) {
                let num = copiedNums.shift();
                copiedNums.push(num);
            }
        } else if (command === 'sumPairs') {
            let flag = false;
            for (let k = 0; k < copiedNums.length; k += 2) {
                if(copiedNums.length === 1){
                    flag = true;
                    break;
                }
                let sum = 0;
                if((k + 1) === copiedNums.length){
                    sum =copiedNums[k];
                }else{
                    sum = copiedNums[k] + copiedNums[k + 1];
                }
                newArr.push(sum);
            }
            if(!flag){
                copiedNums = newArr.slice();
                newArr = [];
            }
            
        }
        if (element[0] === 'print') {
            console.log(`[ ${copiedNums.join(', ')} ]`);
            flag = false;
            break;
        }
        counter++;

    }

    if(flag){
        console.log(`[ ${copiedNums.join(', ')} ]`);
    }

}

manipulator([1, 2, 4, 5, 6, 7, 8],
    ["sumPairs", "remove 0", "print"]
);