function solve(array) {

    let parkingLot = {};

    for (const line of array) {
        let [direction, carNumber] = line.split(', ');

        if (direction === 'IN' && !parkingLot[carNumber]) {
            parkingLot[carNumber] = 'inside';
        } else if (parkingLot[carNumber] && direction === 'OUT') {
            parkingLot[carNumber] = 'outside';
        }else if(direction === 'IN' && parkingLot[carNumber]){
            parkingLot[carNumber] = 'inside';
        }
    }

    let filtered = Object.keys(parkingLot).filter(x => parkingLot[x] !== 'outside');
    let result = sorting(filtered);

    if(result.length === 0){
        console.log('Parking Lot is Empty');
    }else{
        console.log(result.join('\n'));
    }


    function sorting(array) {

        let newArr = [];
        for (const iterator of array) {
            newArr.push(iterator);
        }

        newArr.sort((a,b) => a.localeCompare(b));
        return newArr;
    }

}

solve(['IN, CA2844AA',
'IN, CA2844AA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']


);