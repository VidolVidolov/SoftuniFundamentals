function solve(array) {

    let season = {};
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        let name = '';
        let checker = element.includes('->');
        if (element === 'Ave Cesar') {
            break;
        }
        if (checker) {
            element = array[i].split(' -> ');
            name = element[0];
            if (!season[name]) {
                let gladiator = {};
                gladiator[element[1]] = Number(element[2]);
                season[name] = gladiator;
            } else {
                if (season[name][element[1]] < Number(element[2])) {
                    season[name][element[1]] = Number(element[2]);
                } else if (!season[name][element[1]]) {
                    season[name][element[1]] = Number(element[2]);
                }
            }


        } else {
            element = array[i].split(' vs ');
            let galdiatorOne = element[0];
            let gladiatorTwo = element[1];

            if (season[galdiatorOne] && season[gladiatorTwo]) {
                let gladiatorSkill = getGladiatorPoints(season[galdiatorOne]);
                let gladiatorSkill2 = getGladiatorPoints(season[gladiatorTwo]);
                let checkIfGladiatorsMatch = chekMatch(season[galdiatorOne], season[gladiatorTwo]);

                if (checkIfGladiatorsMatch) {
                    if (gladiatorSkill > gladiatorSkill2) {
                        delete season[gladiatorTwo];
                    } else {
                        delete season[galdiatorOne];
                    }
                } else {
                    continue;
                }
            }
        }

    }

    let sortGladiators = Object.keys(season).sort((a, b) => {
        let gladiator1 = getGladiatorPoints(season[a]);
        let gladiator2 = getGladiatorPoints(season[b]);

        return gladiator2 - gladiator1 || a.localeCompare(b);
    });

    for (const gladiator of sortGladiators) {
        let sortItems = Object.keys(season[gladiator]).sort((a, b) => {
            let skill1 = season[gladiator][a];
            let skill2 = season[gladiator][b];

            return skill2 - skill1 || a.localeCompare(b);
        });
        let skillPoints = getGladiatorPoints(season[gladiator]);
        console.log(`${gladiator}: ${skillPoints} skill`);
        for (const skill of sortItems) {
            console.log(`- ${skill} <!> ${season[gladiator][skill]}`);
        }
    }

    function getGladiatorPoints(object) {

        let sum = 0;
        for (const key in object) {
            sum += object[key];
        }
        return sum;
    }

    function chekMatch(gladiator1, gladiator2) {
        let flag = false;
        Object.keys(gladiator1).forEach(key => {
            Object.keys(gladiator2).forEach(key2 => {
                if (key === key2) {
                    flag = true;
                }
            })
        })
        return flag;
    }



}

solve([
    'Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Pesho vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Gosho',
    'Ave Cesar',
]


);