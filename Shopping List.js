function shopping(array) {

    let list = array[0].split('!');
    let newArr = array.slice(1);

    for (let i = 0; i < newArr.length; i++) {
        let element = newArr[i].split(' ');
        let action = element[0];
        let item = element[1];
        let newItem = element[2];

        if (element === 'Go Shopping') {
            break;
        }
        if (action === 'Urgent') {
            if (list.includes(item)) {
                continue;
            } else {
                list.unshift(item);
            }
        } else if (action === 'Unnecessary') {
            if (list.includes(item)) {
                let index = list.indexOf(item);
                list.splice(index, 1);
            } else {
                continue;
            }
        } else if (action === 'Correct') {
            if (list.includes(item)) {
                let index = list.indexOf(item);
                list.splice(index, 1, newItem);
            } else {
                continue;
            }
        } else if (action === 'Rearrange') {
            if (list.includes(item)) {
                let index = list.indexOf(item);
                let replace = list.splice(index, 1);
                list.push(replace);
            }
        }

    }

    console.log(list.join(', '));

}


shopping([
    'Milk!Pepper!Salt!Water!Banana',
    'Urgent Salt',
    'Unnecessary Grapes ',
    'Correct Pepper Onion',
    'Rearrange Water',
    'Correct Potatoes Tomatoes ',
    'Urgent Ketchup',
    'Go Shopping!'
  ]
  
);