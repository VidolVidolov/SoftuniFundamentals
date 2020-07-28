function solve(input) {

    let gifts = input[0].split(' ');
    let actions = input.slice(1);

    for (let i = 0; i < actions.length; i++) {
        let element = actions[i].split(' ');
        let command = element[0];
        let attribute = element[1];
        let attribute2 = element[2];

        if (command === 'No Money') {
            break;
        }

        if (command === 'OutOfStock') {
            let gift = attribute;
            if (gifts.includes(gift)) {
                for (const iterator of gifts) {
                    let index = gifts.indexOf(gift);
                    gifts.splice(index, 1, 'None');
                    if(!gifts.includes(gift)){
                        break;
                    }
                    
                }
            }
        } else if (command === 'Required') {
            let gift = attribute;
            let index = Number(attribute2);
            if (index < gifts.length && index >= 0) {
                gifts.splice(index, 1, gift);
            }
        } else if (command === 'JustInCase') {
            let gift = attribute;
            gifts.splice(gifts.length - 1, 1, gift);
        }
    }

    let result = gifts.filter(x => x !== 'None');
    console.log(result.join(' '));



}
solve([
    'Sweets Cozonac Clothes Flowers Wine Clothes Eggs Clothes',
    'Required Paper 8',
    'OutOfStock Clothes',
    'Required Chocolate 2',
    'JustInCase Hat',
    'OutOfStock Cable',
    'No Money'
  ]
  
);