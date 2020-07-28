function solve(input) {

    let skill = input.shift();
    let commands = input.shift();

    while (commands !== 'For Azeroth') {
        let [command, att1, att2, att3] = commands.split(' ');

        if (command === 'GladiatorStance') {
            skill = skill.toUpperCase();
            console.log(skill);
        } else if (command === 'DefensiveStance') {
            skill = skill.toLowerCase();
            console.log(skill);
        } else if (command === 'Dispel') {
            let index = Number(att1);
            let letter = att2;
            if (index >= 0 && index < skill.length) {
                skill = skill.split('');
                skill.splice(index, 1, letter);
                skill = skill.join('');
                console.log(`Success!`);
            } else {
                console.log(`Dispel too weak.`);
            }
        } else if (command === 'Target' && att1 === 'Change') {
            while(skill.includes(att2)){
                skill = skill.replace(att2, att3);
            }
            console.log(skill);
        } else if (command === 'Target' && att1 === 'Remove') {
            while(skill.includes(att2)){
                skill = skill.replace(att2, '');
            }
            console.log(skill);
        } else {
            console.log('Command doesn\'t exist!');
        }
        commands = input.shift();
    }

}

solve([
    'DYN4MICNIC',
    'Target Remove NIC',
    'Dispel 3 A',
    'DefensiveStance',
    'Target Change d D',
    'target change D d',
    'For Azeroth'
  ]
  
);