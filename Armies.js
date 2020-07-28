function solve(input) {

    let armies = {};

    for (const element of input) {
        let line = '';
        let leader = '';
        let armyName = '';
        let armyCount = '';
        if (element.includes(': ')) {
            line = element.split(': ');
            leader = line.shift();
            line = line[0].split(', ');
            armyName = line.shift();
            armyCount = Number(line.shift());

            if (armies[leader]) {
                let obj = {};
                obj[armyName] = armyCount;
                armies[leader].push(obj);
            } else {
                continue;
            }

        } else if (element.includes(' + ')) {
            line = element.split(' + ');
            armyName = line.shift();
            armyCount = Number(line.shift());

            for (const line in armies) {
                let check = armies[line];
                let index = 0;
                for (const iterator of check) {
                    Object.entries(iterator).forEach(([key, value]) => {
                        if (key === armyName) {
                            armies[line][index][key] += armyCount;
                        }
                        index++;
                    })
                }
                
            }

        } else {
            line = element.split(' ');
            let action = line.pop();
            leader = line.join(' ');

            if (action === 'arrives') {
                if (!armies[leader]) {
                    armies[leader] = [];
                } else {
                    continue;
                }
            } else if (action === 'defeated') {
                if (armies[leader]) {
                    delete armies[leader];
                } else {
                    continue;
                }
            }
        }

    }

    let sortedLeaders = Object.keys(armies).sort((a, b) => {
        let A = armyCounter(armies[a]);
        let B = armyCounter(armies[b]);
        return B - A;
    });


    for (const leader of sortedLeaders) {
        console.log(`${leader}: ${armyCounter(armies[leader])}`);
        let sortedArmies = Object.keys(armies[leader]).sort((a,b) => {
            let A = Object.values(armies[leader][a])[0];
            let B = Object.values(armies[leader][b])[0];
            return B - A;
        });
        for (const armii of sortedArmies) {
            Object.entries(armies[leader][armii]).forEach(([key, value]) => {
                console.log(`>>> ${key} - ${value}`);
            })
            
        }
    }

    function armyCounter(object) {
        let sum = 0;
        for (const iterator of object) {
            for (const key in iterator) {
                sum += iterator[key];
            }
        }
        return sum;
    }

}

solve(['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000', 'Findlay arrives', 'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350', 'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302', 'Rick Burr defeated', 'Porter: Retix, 3205']);