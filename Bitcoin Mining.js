function bitcoinMining(input) {

    let goldMined = 0;
    let counter = 0;
    let goldEarned = 0;
    let bitcoinValue = 11949.16;
    let bitcoinGram = 67.51;
    let money = 0;
    let dayOfWin = 0;
    let flag = false;
    let BitcoinsCount = 0;
    while (true) {

        goldMined = input.shift();
        counter++;
        if (goldMined === undefined) {
            break;
        }
        if (counter % 3 === 0) {
            goldMined = goldMined * 0.7;
            goldEarned += goldMined
        } else {
            goldEarned += goldMined;
        }

        money += (goldMined * bitcoinGram);
        if (money >= bitcoinValue && !flag) {
            dayOfWin = counter;
            flag = true;
        }
        while (money >= bitcoinValue) {
            money = money - bitcoinValue;
            BitcoinsCount++;
        }



    }

    console.log(`Bought bitcoins: ${BitcoinsCount}`);
    if (flag) {
        console.log(`Day of the first purchased bitcoin: ${dayOfWin}`);
    }

    console.log(`Left money: ${money.toFixed(2)} lv.`);



}


bitcoinMining([3124.15, 504.212, 2511.124]);