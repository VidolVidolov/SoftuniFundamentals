function solve(input){

    let budget = Number(input.shift());
    let priceForOneflour = Number(input.shift());

    let onePackEggs = priceForOneflour * 0.75;
    let litreMilk = priceForOneflour * 1.25;
    let milkForCozunak = litreMilk * 0.25;

    let cozunak = milkForCozunak  + onePackEggs + priceForOneflour;
    let result = 0;
    let eggs = 0;
    let cozi = 0;
   while(budget>cozunak) {
        
        budget -= cozunak;
        cozi++;
        eggs += 3;
        if(cozi % 3 === 0){
            let lost = cozi - 2;
            eggs -= lost;
        }
        
    }
    console.log(`You made ${cozi} cozonacs! Now you have ${eggs} eggs and ${budget.toFixed(2)}BGN left.`);
    


}

solve([ '20.50', '1.25' ]
);