function solve(eightBit){

    eightBit = eightBit.split('').reverse().join('');

    let sum = 0;
    let math = 0;
    let counter = 0;
    let middle = 0;
    for (let i = 0; i < eightBit.length; i++) {
        
        middle = Number(eightBit[i]);
        math = middle * Math.pow(2 , counter);
        sum += math;
        counter++;
    }
    console.log(sum);
    


}

solve(`11110000`);