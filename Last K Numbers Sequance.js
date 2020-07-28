function numberSequence(n, k) {

    let sequeneLength = Number(n);
    let previousNumbersToSum = Number(k);
    let result = [1];
    let final = [];
    let sum = 0;
    let summy =0;

    for (let i = 1; i < sequeneLength; i++) {
         final = improveArray(result, previousNumbersToSum);
         result.push(final);
    }



    function improveArray(array, number){
        let sum = 0;
        if(array.length <= number){
            for (let i = 0; i < array.length; i++) {
                sum += array[i];
                
            }
        }else{
            for (let i = array.length - number; i < array.length; i++) {
                sum += array[i];
                
            }
        }

        return sum;
    }

    console.log(result.join(' '));

}

numberSequence(8, 2)