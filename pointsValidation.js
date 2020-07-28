function pointsValidation(array){

    let x1 = array[0];
    let y1 = array[1];
    let x2 = array[2];
    let y2 = array[3];


    let firstPoint = checkFirstPoint();
    let secondPoint = checkSecondPoint();
    let thirdPoint = checkThirdPoint();

    if(firstPoint === Math.trunc(firstPoint)){
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    }else{
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (secondPoint === Math.trunc(secondPoint)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    }else{
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if(thirdPoint === Math.trunc(thirdPoint)){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    }else{
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }


    function checkFirstPoint(){
        let result = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
        return result;

    }

    function checkSecondPoint(){
        let result = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
        return result;

    }

    function checkThirdPoint(){

        let result = Math.sqrt(Math.pow(Math.abs(x2- x1),2) + Math.pow(Math.abs(y2 - y1), 2));
        return result;
    }

}

pointsValidation([85, 575, 6, 3]);