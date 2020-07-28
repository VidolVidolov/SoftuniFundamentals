function solve(array){

    let sideSize = Number(array[0]);
    let numberOfSheets = Number(array[1]);
    let areaOfSheet = Number(array[2]);
    let copy = areaOfSheet;
    let area = sideSize * sideSize* 6;
    let cover = 0;
    for (let i = 1; i <= numberOfSheets; i++) {

            if(i % 3 === 0){
                areaOfSheet *= 0.25;
            }
            cover += areaOfSheet;
            areaOfSheet = copy;
    }

    let percentage = cover / area * 100;

    console.log(`You can cover ${percentage.toFixed(2)}% of the box.`);
    

}


solve([ '5', '30', '4' ]
);