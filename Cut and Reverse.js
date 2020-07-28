function solve(input){

    let half = (input.length / 2);
    let firstHalf = input.substr(0, half).split('').reverse().join('');
    let secondHalf = input.substr(half,half).split('').reverse().join('');
    console.log(firstHalf);
    console.log(secondHalf);

}

solve('tluciffiDsIsihTgnizamAoSsIsihT')