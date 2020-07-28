function solve(input) {

    let numberOfMembers = Number(input.shift());
    let party = generateParty(numberOfMembers);
    let maxHP = 100;
    let maxMP = 200;
    let command = input.shift();

    while (command !== 'End') {
        let [action, name, att1, att2] = command.split(' - ');

        if (action === 'CastSpell') {
            let manaNeeded = Number(att1);
            let spellName = att2;
            let currentStats = generateCurrentStats(name);
            let currHP = currentStats[0];
            let currMana = currentStats[1];

            if (currMana >= manaNeeded) {
                currMana -= manaNeeded;
                console.log(`${name} has successfully cast ${spellName} and now has ${currMana} MP!`);
                party[name] = [currHP, currMana];
            } else {
                console.log(`${name} does not have enough MP to cast ${spellName}!`);
            }
        } else if (action === 'TakeDamage') {
            let damage = Number(att1);
            let attacker = att2;
            let currentStats = generateCurrentStats(name);
            let currHP = currentStats[0];
            let currMana = currentStats[1];

            currHP -= damage;
            if (currHP > 0) {
                console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${currHP} HP left!`);
                party[name] = [currHP, currMana];
            } else {
                console.log(`${name} has been killed by ${attacker}!`);
                delete party[name];
            }
        } else if (action === 'Recharge') {
            let amount = Number(att1);
            let currentStats = generateCurrentStats(name);
            let currHP = currentStats[0];
            let currMana = currentStats[1];

            let diff = maxMP - currMana;
            currMana += amount;

            if (currMana > maxMP) {
                currMana = maxMP;
                party[name] = [currHP, currMana];
                console.log(`${name} recharged for ${diff} MP!`);
            } else {
                party[name] = [currHP, currMana];
                console.log(`${name} recharged for ${amount} MP!`);
            }
        } else if (action === 'Heal') {
            let amount = Number(att1);
            let currentStats = generateCurrentStats(name);
            let currHP = currentStats[0];
            let currMana = currentStats[1];

            let diff = maxHP - currHP;
            currHP += amount;

            if (currHP > 100) {
                currHP = maxHP;
                party[name] = [currHP, currMana];
                console.log(`${name} healed for ${diff} HP!`);
            } else {
                party[name] = [currHP, currMana];
                console.log(`${name} healed for ${amount} HP!`);
            }
        }
        command = input.shift();
    }


    let sorted = Object.keys(party).sort((a, b) => {
        let A = party[a][0];
        let B = party[b][0];
        return B - A || a.localeCompare(b);
    })
    
    for (const name of sorted) {
        console.log(name);
        let stats = generateCurrentStats(name);
        let hp = stats[0];
        let mana = stats[1];
        console.log(`  HP: ${hp} `);
        console.log(`  MP: ${mana} `); 
    }
    
    function generateCurrentStats(name) {

        let arr = [];
        Object.keys(party).forEach(el => {
            if (el === name) {
                for (const element of party[el]) {
                    arr.push(element);
                }
            }
        })
        arr = arr.map(Number);
        return arr;
    }
    function generateParty(number) {
        let object = {};
        for (let i = 0; i < number; i++) {
            let hero = input.shift();
            let [name, hp, mp] = hero.split(' ');

            if (!object[name]) {
                object[name] = [hp, mp];
            }

        }
        return object;
    }

}

solve([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
]
);