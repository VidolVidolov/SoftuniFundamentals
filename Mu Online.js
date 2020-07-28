function solve(string) {

    let health = 100;
    let bitcoins = 0;
    let array = string.split('|');
    let room = 0;
    let flag = true;
    for (let i = 0; i < array.length; i++) {
        let element = array[i].split(' ');
        let thing = element[0];
        let value = Number( element[1]);
        room++;
        if (thing === 'potion') {
            if (health === 100) {
                console.log(`You healed for ${0} hp.`);
            } else {
                let oldHp = health;
                health += value;
                let diff = 0;
                if (oldHp + value > 100) {
                    diff = 100-oldHp;
                    health = 100;
                    console.log(`You healed for ${diff} hp.`);
                    console.log(`Current health: ${health} hp.`);
                    
                } else {
                    console.log(`You healed for ${value} hp.`);
                    console.log(`Current health: ${health} hp.`);
                }
            }
        } else if (thing === 'chest') {
            bitcoins += value;
            console.log(`You found ${value} bitcoins.`);
        } else {
            health -= value;
            if(health > 0){
                console.log(`You slayed ${thing}.`); 
            }else{
                console.log(`You died! Killed by ${thing}.`);
                console.log(`Best room: ${room}`);
                flag = false;
                break;
                
            }

        }
    }

if(flag){
    console.log(`You've made it!\nBitcoins: ${bitcoins}\nHealth: ${health}`);
    
}


}

solve('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110');