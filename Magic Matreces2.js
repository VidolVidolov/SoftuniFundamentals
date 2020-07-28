function magicMatrices(arr) {

    let rowsCheck = rows(arr);
    let columsCheck= colums(arr);

    if(rowsCheck && columsCheck){
        return true;
    }else{
        return false;
    }

    function rows(rows){
        let isEqual = false;
        let sum = 0;
        let currSum = 0;
        for (let i = 0; i < rows.length; i++) {
            let element = rows[i];
            for (let j = 0; j < element.length; j++) {
                sum+= element[j];
                
            }
                if (currSum == sum) {
                    isEqual = true;
                }else if(currSum != sum && currSum != 0){
                    isEqual = false;
                    break;
                }     
                currSum = sum; 
                sum = 0;      
        }
        return isEqual;
    }

    function colums(colums){
        let isEqual = false;
        let sum =0;
        let currSum = 0;

        for (let i = 0; i < colums.length; i++) {
            for (let j = 0; j < colums.length; j++) {
                sum += colums[j][i];
                
            }
            if (currSum == sum) {
                isEqual = true;
            }else if(currSum != sum && currSum != 0){
                isEqual = false;
                break;
            }   
            currSum = sum;  
            sum = 0;  
        }
        return isEqual;
    }


}

magicMatrices([ [1, 32, 45],
                [21, 0, 1],
                [21, 1, 1]]
);