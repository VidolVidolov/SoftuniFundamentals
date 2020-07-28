function solve(input){

    let numberOfCommands = Number(input.shift());
    let pattern = /\|(?<name>[A-Z]{4,})\|:#(?<title>[A-Za-z]+\s[A-Za-z]+)#/;
    let storage = [];
    for (let i = 0; i < numberOfCommands; i++) {
        let line = input.shift();
        let info = pattern.exec(line);
        if(info){
            let name = info.groups.name;
            let title = info.groups.title;
            let strength = name.length;
            let armor = title.length;
            console.log(`${name}, The ${title}`);
            console.log(`>> Strength: ${strength}`);
            console.log(`>> Armour: ${armor}`);
        }else{
            console.log('Access denied!');
        }
        
    }
}

solve([
    '3',
    '|GEORGI|:#Lead architect#',
    '|Hristo|:#High Overseer#',
    '|STEFAN|:#Assistant Game Developer#'
  ]
  );