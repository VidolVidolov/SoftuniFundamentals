function solve(start, end){

    let sum = "";
    let sum1 =0;
    for (let i = start; i <= end; i++) {
        sum += `${i} `;
        sum1 += i;
    }
    
    console.log(sum);
    console.log(`Sum: ${sum1}`);
    
}

solve(5, 10);