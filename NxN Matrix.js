function nxnMatrix(number) {

    for (let i = 0; i < number; i++) {
        let element = colum(number);
        console.log(element);

    }

    function colum(num) {
        let result = num.toString();
        let result2 = '';
        for (let i = 0; i < num; i++) {
            result2 += result + ' ';

        }
        return result2;
    }


}

nxnMatrix(7);