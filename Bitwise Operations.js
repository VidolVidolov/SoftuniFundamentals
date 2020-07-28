function solve(number, checkFor){

    let converted = number.toString(2);
    checkFor = checkFor.toString();
    let counter = 0;
    // console.log(converted);
    for (const iterator of converted) {
        if(iterator === checkFor){
            counter++;
        }
    }
     console.log(counter);
     



}

solve(20,0);