function solve(array){

    let townObj= {};
    let newArr = [];
    
    for (let i = 0; i < array.length; i++) {
        let element = array[i].split(' | ');
        let town = element[0];
        let latitude = Number(element[1]).toFixed(2);
        let longitude = Number(element[2]).toFixed(2);

        townObj.town = town;
        townObj.latitude = latitude;
        townObj.longitude= longitude;
        newArr.push(townObj);
        console.log(townObj);
        
    }


}

solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
);