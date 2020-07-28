function solve(num1, num2, num3){

    let biggest = 0;
    let middle = 0;
    let lowest = 0;
    

    if(num1 > num2 && num1 > num3){
        biggest = num1;
    }else if(num2 > num1 & num2 > num3){
        biggest = num2;
    }else if(num3 > num1 && num3 > num2){
        biggest = num3;
    }

    if(num1 === biggest){
        if(num2 > num3){
            middle = num2;
            lowest = num3;
        }else{
            middle = num3;
            lowest = num2;
        }

    }else if(num2 === biggest){
        if(num1 > num3){
            middle = num1;
            lowest = num3;
        }else{
            middle = num3;
            lowest = num1;
        }
    }else if(num3 === biggest){
        if(num1 > num2){
            middle = num1;
            lowest = num2;
        }else{
            middle = num2;
            lowest = num1;
        }
    }
    
console.log(biggest);
console.log(middle);
console.log(lowest);





}

solve(-2,1,3);