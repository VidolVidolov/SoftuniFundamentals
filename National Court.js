function court(array) {

    let firstWorker =Number(array[0]);
    let secondWorker =Number(array[1]);
    let thirdWorker =Number(array[2]);
    let peopleCount =Number(array[3]);

    let oneHourAll = firstWorker + secondWorker + thirdWorker;
    let counter = 0;
    while (peopleCount > 0) {
        peopleCount -= oneHourAll;
        counter++;
        if(counter % 4 === 0){
            counter++;
        }
    }

    console.log(`Time needed: ${counter}h.`);

}


court(['1', '2', '3', '45']
);