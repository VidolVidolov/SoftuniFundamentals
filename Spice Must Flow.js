function solve(startingYield) {

    let days = 0;
    let currentYield = 0;

    while (startingYield >= 100) {
        currentYield += (startingYield - 26);
        days++;
        startingYield -= 10;

    }

    currentYield -= 26;
    if (currentYield < 0) {
        currentYield = 0;
    }
    console.log(days);
    console.log(currentYield);

}

solve(90);