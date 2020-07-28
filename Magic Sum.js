function solve(array, magicSum){

    let result = '';
    let sum = 0;
    for (let i = 0; i < array.length; i++) {

        let element = array[i];
        for (let j = i + 1; j < array.length; j++) {
            sum = element + array[j];
            if(sum === magicSum){
                result += `${element} ${array[j]}\n`
            }
            
        }
        
    }

    console.log(result);
    

}


solve([1, 2, 3, 4, 5, 6],
    6
    
    
    );