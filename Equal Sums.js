function solve(array) {

    let result = '0';
    let flag = false;
    for (let i = 0; i < array.length; i++) {
        //let element = array[i];
        let probableSum = 0;
        let probableSum2 = 0;
        for (let j = i + 1; j < array.length; j++) {
            probableSum += array[j];
            
        }
       for (let j = i; j > 0; j--) {
           probableSum2 += array[j - 1]
           
       }
       if(probableSum2 === probableSum){
           result = i;
           flag = true;
           break;
       }
        
    }
    if (flag) {
        console.log(result);
    }else{
        console.log('no');
        
    }
    
    
}

solve([1,2]);