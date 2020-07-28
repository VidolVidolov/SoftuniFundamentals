function thePyramid(base, increment) {

    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let counter = 0;
    let gold = 0;
    let height = 0;
    let currentStone = 0;
    let currentBase = base;
    let finalMarble = 0;
    while(currentBase > 2){
        
        marble = (currentBase * 4) - 4;
        currentStone = (currentBase * currentBase )- marble;
        stone += currentStone;
        counter++;
        if(counter % 5 === 0){
            lapis += marble;
        }else{
            finalMarble += marble;
        }

        
        currentBase -=2;
    }
    counter++;
    gold = (currentBase * currentBase) * increment;
    height = counter * increment;
    console.log(`Stone required: ${Math.ceil(stone * increment)}`);
    console.log(`Marble required: ${Math.ceil(finalMarble * increment)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis * increment)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);
    

}

thePyramid(2, 1);