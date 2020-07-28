function solve(input) {

    let list = input.slice(0, input.indexOf('PARTY'));
    let comingGuests = input.slice(input.indexOf('PARTY') + 1);

    let guests = {
        vip: [],
        regular: [],
    }

    for (const person of list) {
        let vipCheck = vipChecker(person);
        if (vipCheck) {
            let guest = { person: person, isComing: false };
            guests['vip'].push(guest);
        } else {
            let guest = { person: person, isComing: false };
            guests.regular.push(guest);
        }
    }

    comingGuests.forEach(person => {
        let currentGuest = vipChecker(person);
        let setGuest = currentGuest ? 'vip' : 'regular';
        let listCheck = guests[setGuest].find(x => x.person === person);
        if (listCheck && currentGuest) {
            listCheck.isComing = true;
        } else if (listCheck && !currentGuest) {
            listCheck.isComing = true;
        }

    });

    let filterVIP = Array.from(guests.vip).filter(x => x.isComing !== true);
    let filterRegular = Array.from(guests.regular).filter(x => x.isComing !== true);
    let result = filterVIP.concat(filterRegular);
    console.log(result.length);
    for (const key of result) {
       console.log(key.person);
    }

    function vipChecker(guest) {
        return !isNaN(Number(guest[0]))
    }

}

solve(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]
);