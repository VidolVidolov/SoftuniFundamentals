function perfectNumber(number){

    let check = isPerfect(number);
    if(check){
        console.log(`We have a perfect number!`);
        
    }else{
        console.log(`It's not so perfect.`);
        
    }

    function isPerfect(num){

        let sum = 0;
        for (let i = 1; i < num; i++) {
            if(num % i === 0){
                sum += i;
            }
            
        }
        if(sum === num){
            return true;
        }else{
            return false;
        }

    }


}

perfectNumber(1236498);