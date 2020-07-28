function solve(array) {

    let journeyCost = Number(array[0]);
    let months = Number(array[1]);
    let savedMoney = 0;
    for (let i = 1; i <= months; i++) {
        if (i % 2 !== 0 && i !== 1) {
            savedMoney *= 0.84;
        }
        if (i % 4 === 0 && i !== 1) {
            savedMoney += savedMoney * 0.25;
        }
        savedMoney += journeyCost * 0.25;
    }

    if (savedMoney >= journeyCost) {
        console.log(`Bravo! You can go to Disneyland and you will have ${(savedMoney - journeyCost).toFixed(2)}lv. for souvenirs.`);
    } else {
        console.log(`Sorry. You need ${(journeyCost - savedMoney).toFixed(2)}lv. more.`)
    }


}

solve(['3265', '3']);