function solve(input) {

    let strings = input.shift().split('|');
    let fistPart = strings[0];
    let secondPart = strings[1];
    let thirdPart = strings[2];

    fistPart
        .match(/([#$%*&])(?<capital>[A-Z]+)\1/)
        .groups.capital.split('')
        .forEach(char => {
            let asciiCode = char.charCodeAt(0);
            let length = Number(secondPart.match(new RegExp(`${asciiCode}:(?<length>[0-9][0-9])`)).groups.length);
            let word = thirdPart.match(new RegExp(`(?<=\\s|^)${char}[^\\s]{${length}}(?=\\s|$)`,'g'));
            console.log(word[0]);
            
        });

}


solve([
    'sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos'
]
);