function days(numberDay) {

    let daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    if (numberDay < 1 || numberDay > 7) {
        console.log('Invalid day!');

    } else {
        console.log(daysOfWeek[numberDay - 1]);

    }


}

days(2);