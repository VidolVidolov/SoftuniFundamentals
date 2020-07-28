function solve(input) {

    let heroes = {};
    let line = input.shift();

    while (line !== 'End') {
        let [command, name, spell] = line.split(' ');

        if(command === 'Enroll'){
            if(!heroes[name]){
                heroes[name] = [];
            }else{
                console.log(`${name} is already enrolled.`); 
            }
        }else if(command === 'Learn'){
            if(!heroes[name]){
                console.log(`${name} doesn't exist.`);
            }else{
                if(heroes[name].includes(spell)){
                    console.log(`${name} has already learnt ${spell}.`);
                }else{
                    heroes[name].push(spell);
                }
            }
        }else if(command === 'Unlearn'){
            if(!heroes[name]){
                console.log(`${name} doesn't exist.`);
            }else{
                if(!heroes[name].includes(spell)){
                    console.log(`${name} doesn't know ${spell}.`);
                }else{
                    let index = heroes[name].indexOf(spell);
                    heroes[name].splice(index,1);
                }
            }
        }

        line = input.shift();
    }

    let sorted = Object.keys(heroes).sort((a,b) => heroes[b].length - heroes[a].length || a.localeCompare(b));
    
    console.log(`Heroes:`);
    for (const name of sorted) {
        console.log(`== ${name}: ${heroes[name].join(', ')}`);
    }

}

solve([
    'Enroll Stefan',
    'Learn Stefan ItShouldWork',
    'Learn Stefan ItShouldWork',
    'Unlearn Stefan NotFound',
    'End'
  ]
  
);