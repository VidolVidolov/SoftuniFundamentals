function solve(input) {

    let player = generateHand(input);
    let cardsPower = {
        p: {
            J: 11,
            Q: 12,
            K: 13,
            A: 14
        },

        t: {
            S: 4,
            H: 3,
            D: 2,
            C: 1
        }

    }

    Object.keys(player).forEach(key => {
        let result = 0;
        player[key].forEach(value => {
            let line = value.split('');
            let points = line.slice(0,line.length -1 ).join('');
            let paint = line.slice(line.length - 1).join('');
            let pointsIsNum = numCheck(points);
            if(pointsIsNum){
                points = Number(points);
            }else{
                points = cardsPower.p[points];
            }
            paint = Number(cardsPower.t[paint]);
            result+= points * paint;
        })
        console.log(`${key}: ${result}`);
    })

    function generateHand(array) {

        let object = {};

        array.forEach(playerInfo => {
            let [name, cards] = playerInfo.split(': ');

            if (!object[name]) {
                object[name] = new Set(cards.split(', '));
            } else {
                cards.split(', ').forEach(card => {
                    object[name].add(card);
                })
            }
        });
        return object;
    }

    function numCheck(number){
        return !isNaN(Number(number));
    }

}

solve([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]
);