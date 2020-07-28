function solve(array){

    let arrayToOperate = array[0].split(' ').map(Number);
    let actions = array.slice(1);

    for (let i = 0; i < actions.length; i++) {
        let element = actions[i].split(' ');
        let command = element[0];
        let argument = element[1];
        let secondArgument = element[2];

        if(command === 'End'){
            break;
        }

        if(command === 'Switch'){
            let index = Number(argument);
            if(index < arrayToOperate.length && index >= 0){
                arrayToOperate.splice(index,1,arrayToOperate[index] *= -1);
            }
        }else if(command === 'Change'){
            let index = Number(argument);
            let value = Number(secondArgument);

            if(index < arrayToOperate.length && index >= 0){
                arrayToOperate.splice(index,1,value);
            }

        }else if(command === 'Sum' && argument === 'Negative'){
            let print = arrayToOperate.filter(x=> x < 0);
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            console.log(print.reduce(reducer));
            
        }else if(command === 'Sum' && argument === 'Positive'){
            let print = arrayToOperate.filter(x=> x >= 0);
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            console.log(print.reduce(reducer));
            
        }else if(command === 'Sum' && argument === 'All'){
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            console.log(arrayToOperate.reduce(reducer));
            
        }
        
    }

    let printer = arrayToOperate.filter(x => x >= 0);
    console.log(printer.join(" "));
    




}

solve([ '1 2 3 4 5', 'Switch 4', 'Change 0 -3', 'Sum Negative', 'End' ]
);