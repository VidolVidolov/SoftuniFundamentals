function solve(input){

    let line = input.shift();
    let patternForName = /[^\s,]+/g;
    let names = line.match(patternForName);
    let HP = 0;
    let DMG = 0;
    let object = {};
    for (const demon of names) {
        HP = 0;
        DMG = 0;
        let name = demon;
        let health = /[^0-9+\-*\/.]/g;
        let hp = name.match(health);
        if(hp){
            hp.forEach(char => { HP += char.charCodeAt(0)});
        }
        let damage = /[-+]?[\d]+(\.[\d]+)?/g;
        let dmg = name.match(damage);
        if(dmg){
            dmg.forEach(char => DMG += Number(char));
        }
        let upgrade = /[*\/]/g;
        let availablUpgrades = name.match(upgrade);
        if(availablUpgrades){
            availablUpgrades.forEach(el => {
                if(el === '/'){
                    DMG /= 2;
                }else if(el === '*'){
                    DMG *= 2;
                }
            });
        }
        object[name] = [HP, DMG];
    }
    
    let sorted = Object.keys(object).sort((a,b) => a.localeCompare(b));

    for (const demon of sorted) {
        console.log(`${demon} - ${object[demon][0]} health, ${object[demon][1].toFixed(2)} damage`);
    }

}


solve([ 'M3ph1st0**, Azazel' ]
);