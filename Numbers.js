function solve(array){

    let newArr = array.split(' ').map(Number);
    let average = 0;

    newArr.forEach(x => {
        average += x;
    });

    average = average / newArr.length;
    let greaterNums = newArr.filter(x => x > average);
    if(greaterNums.length <=0){
        console.log('No');
    }else{
        greaterNums.sort((a,b) => b - a);
        if(greaterNums.length >= 5){
            let result = greaterNums.slice(0,5);
            console.log(result.join(' '));
            
        }else{
            console.log(greaterNums.join(' '));
        }
    }




}

solve('-1 -2 -3 -4 -5 -6');