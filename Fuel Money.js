function solve(distnace, numberOfPassengers, priceForLitreDiesel){

    let neededDiesel = (distnace / 100) * 7 + (numberOfPassengers * 0.1) ;
    let price = neededDiesel * priceForLitreDiesel;
    console.log(`Needed money for that trip is ${price}lv.`);
    

}

solve(90, 14, 2.88);