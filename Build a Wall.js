function building(array) {

    let counter = '';
    let finished = [];
    let sum = '';
    let maper = 0;
    let arr = [];
    let lenght = 0;
    while (array.length > 0) {

        // for (let i = 0; i < lenght; i++) {
        //     let element = array[i];
        //     if (element === 30) {
        //         let remove = array.indexOf(element);
        //         finished.push(array.splice(remove, 1));
        //     }

        // }
        array = array.filter(x => x!=30);
        array = array.map(x => x + 1);
        sum = array.length * 195;
        maper += sum;
        
        
        
        
        if (array.length === 0) {
            break;
        }
        //counter += (sum + ' ');
        arr.push(sum);
        lenght = array.length
    }

    console.log(arr.join(', '));
    console.log(`${maper * 1900} pesos`);

}


building([21, 25, 28]);