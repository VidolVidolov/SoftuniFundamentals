function solve(array) {

    let heroArr = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i].split(' / ');
        let heroName = element[0];
        let level = element[1];
        let items = element[2].split(', ').sort((a, b) => a.localeCompare(b));
        let hero = {};
        hero.name = heroName;
        hero.level = level;
        hero.items = items.join(', ');

        heroArr.push(hero);
        heroArr.sort((a, b) => a.level - b.level)
    }

    heroArr.forEach(x => {
        console.log(`Hero: ${x.name}\nlevel => ${x.level}\nitems => ${x.items}`);

    });


}

solve([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
]
);