function solve(number, precision){

    let result ;
    if(precision >= 15){
        precision = 15;
        result = number.toFixed(precision);
        result = parseFloat(result);
    }else{
        result = number.toFixed(precision);
        result = parseFloat(result);
    }
console.log(result);


}

solve(10.5, 3);