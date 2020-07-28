function solve(array){

    let step = Number(array[array.length- 1]);
    let resultPrint = "";   

    for (let i = 0; i < array.length - 1; i+= step) {
        
        resultPrint += array[i] + ' ';
    }
    console.log(resultPrint);
    

}

solve(['dsa', 'asd', 'test', 'test', '2']);