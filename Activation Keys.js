function solve(input) {

    let activationKey = input.shift();
    let commands = input.shift();

    while (commands !== 'Generate') {
        let [command, att1, att2, att3] = commands.split('>>>');

        if (command === 'Contains') {
            let substring = att1;
            if (activationKey.includes(substring)) {
                console.log(`${activationKey} contains ${substring}`);
            } else {
                console.log(`Substring not found!`);
            }
        }else if(command === 'Flip'){
            let startIndex = Number(att2);
            let endIndex = Number(att3);
            if(att1 === 'Upper'){
                let newSub = activationKey.substring(startIndex,endIndex);
                let substring = newSub;
                newSub = newSub.toUpperCase();
                activationKey = activationKey.replace(substring,newSub);
            }else if(att1 === 'Lower'){
                let newSub = activationKey.substring(startIndex,endIndex);
                let substring = newSub;
                newSub = newSub.toLowerCase();
                activationKey = activationKey.replace(substring,newSub);
            }
            console.log(activationKey);
        }else if(command === 'Slice'){
            let startIndex = Number(att1);
            let endIndex = Number(att2);
            let smt = activationKey.substring(startIndex,endIndex);
            activationKey = activationKey.replace(smt,'');
            console.log(activationKey);
        }
        commands = input.shift();
    }

    console.log(`Your activation key is: ${activationKey}`);
    
}

solve([
    'abcdefghijklmnopqrstuvwxyz',
    'Slice>>>2>>>6',
    'Flip>>>Upper>>>3>>>14',
    'Flip>>>Lower>>>5>>>7',
    'Contains>>>def',
    'Contains>>>deF',
    'Generate'
]
);