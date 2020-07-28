function solve(array) {

    let bestSequence = [];
    let result = '';

    for (let i = 0; i < array.length; i++) {

        let element = array[i];
        let currentSequence = [element];
        for (let j = i + 1; j < array.length; j++) {
           let nextElement = array[j];

           if(element === nextElement){
               currentSequence.push(nextElement);
               i = j;
           }else{
               break;
           }
           
            
        }
        if(currentSequence.length > bestSequence.length){
            bestSequence = currentSequence;
        }

    }

    for (const iterator of bestSequence) {
        result += iterator + ' ';
    }
console.log(result);




}

solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);