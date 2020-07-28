function solve(array) {

    let index = array.indexOf('PARTY');
    let reservationList = array.slice(0, index);
    let comingGuests = array.slice(index + 1);

    let guests = {
        vip: [],
        regular: [],
    }

    for (const guest of reservationList) {
        if (checkVIP(guest)) {
            guests.vip[guest] = false;
        } else {
            guests.regular[guest] = false;
        }
    }

    Object.keys(guests.vip).forEach(x => {
        for (const iterator of comingGuests) {
            if(iterator === x){
                guests.vip[x] = true;
            }
        }
    });

     Object.keys(guests.regular).forEach(x => {
        for (const iterator of comingGuests) {
            if(iterator === x){
                guests.regular[x] = true;
            }
        }
    });

    let goingVip = Object.keys(guests.vip).filter(x => guests.vip[x] === false);
    let goingRegular = Object.keys(guests.regular).filter(x => guests.regular[x] === false);

    let result = goingVip.concat(goingRegular);
    let peopleCount = result.length;
    console.log(peopleCount);
    for (const iterator of result) {
        console.log(iterator);
    }

    function checkVIP(person) {
        return !isNaN(Number(person[0]));
    }

}

solve(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'2FQZT3uC',

]

);