function solve(input) {

    levelAsString = input.shift();
    let level = [];
    let rooms = [];
    let singleRoom = '';
    let innerCounter = 0;

    while (levelAsString.length !== innerCounter) {
        singleRoom = '';
        for (let i = innerCounter; i < levelAsString.length; i++) {
            if (levelAsString[i] === '|') {
                innerCounter++;
                break;
            }
            singleRoom += levelAsString[i];
            innerCounter++;

        }
        rooms.push(singleRoom);
    }

    let health = 100;
    let coins = 0;
    let option = '';
    let points = 0;
    let bestRoom = 1;
    let completeQuest = true;

    while (rooms.length !== 0) {
        let action = rooms.shift();
        let flag = false;
        points = '';
        option = '';
        for (let i = 0; i < action.length; i++) {
            let element = action[i];
            if (element === ' ' || flag) {
                if (flag) {
                    points += element;
                }
                flag = true;
            } else {
                option += element;
            }

        }
        points = Number(points);
        if (option === 'potion') {
            if (health === 100) {
                console.log(`You healed for 0 hp.`);
            } else {
                let currentHealth = health;
                health += points;
                if (health >= 100) {

                    console.log(`You healed for ${100 - currentHealth} hp.`);
                    health = 100;
                } else {
                    console.log(`You healed for ${points} hp.`);
                }
            }
            console.log(`Current health: ${health} hp.`);

        } else if (option === 'chest') {
            console.log(`You found ${points} coins.`);
            coins += points;
        } else {
            health -= points;
            if (health <= 0) {
                console.log(`You died! Killed by ${option}.`);
                console.log(`Best room: ${bestRoom}`);
                completeQuest = false;
                break;
            } else {
                console.log(`You slayed ${option}.`);
            }
        }

        bestRoom++;

    }
    if (!completeQuest) {

    } else {
        console.log(`You've made it!\nCoins: ${coins}\nHealth: ${health}`);

    }

}

solve([`cat 10|potion 30|orc 10|chest 10|snake 25|chest 110`]);