function solve(lostFights, helmetPrice, swordPrice, shieldPrice, aromorPrice){

    let brokenHelmet = Math.trunc(lostFights / 2);
    let brokenSword = Math.trunc(lostFights / 3);
    let brokenShield = Math.trunc(lostFights / 6);
    let brokenArmor = Math.trunc(lostFights / 12);

    let result = (brokenHelmet * helmetPrice) + (brokenSword * swordPrice) + (brokenShield * shieldPrice) + (brokenArmor * aromorPrice);
    console.log(`Gladiator expenses: ${result.toFixed(2)} aureus`);
    



}

solve(7,
    2,
    3,
    4,
    5
    );