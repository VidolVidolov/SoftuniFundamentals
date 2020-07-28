function invertory(array) {


    let invertory = array[0].split(' ');
    let actions = array.slice(1);

    for (let i = 0; i < actions.length; i++) {
        let element = actions[i].split(' ');
        let action = element[0];
        let item = element[1];

        if (action === 'Buy') {
            if (!invertory.includes(item)) {
                invertory.push(item);
            }
        } else if (action === 'Trash') {
            let split;
            let temp;
            if (item.includes('-')) {
                split = item.split('-');
                temp = `${split[0]}:${split[1]}`;
            } else {
                temp = item;
            }

            if (invertory.includes(temp)) {
                for (let j = 0; j < invertory.length; j++) {
                    if (invertory[j] === temp) {
                        invertory.splice(j, 1);
                    }
                    // if (invertory[j].includes(item)) {
                    //     invertory.splice(j, 1);
                    // }

                }
            }
        } else if (action === 'Repair') {
            if (invertory.includes(item)) {
                let itemUpgrade = '';
                for (let j = 0; j < invertory.length; j++) {
                    if (invertory[j] === item) {
                        itemUpgrade = invertory.splice(j, 1);
                    }

                }
                invertory.push(itemUpgrade[0]);
            }
        } else if (action === 'Upgrade') {
            let split = item.split('-');
            let finalUpgrade = split[0];
            for (let j = 0; j < invertory.length; j++) {
                if (invertory[j] === finalUpgrade) {
                    let upgraded = split.join(':')
                    invertory.splice(j + 1, 0, upgraded);
                    break;
                }

            }
        }
    }
    console.log(invertory.join(' '));

}

invertory(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel',
    'Trash SWORD-Steel']

);