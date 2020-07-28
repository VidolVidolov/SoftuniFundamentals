function scoringSystem(array){

    let students = Number(array.shift());
    let lectures = Number(array.shift());
    let courseBonus = Number(array.shift());

    let newArr= [];
    let currentBest = 0;
    let attendaces = 0;
    for (let i = 0; i < array.length; i++) {
        let studentAttendances  = Number(array[i]);
        let bonus = studentAttendances / lectures * (5+courseBonus);
        if(bonus > currentBest){
            currentBest = bonus;
            attendaces = studentAttendances;
        }
        
    }

    console.log(`Max Bonus: ${Math.ceil(currentBest)}.`);
    console.log(`The student has attended ${attendaces} lectures.`);
    
    

}

scoringSystem([
    '5',  '25', '30',
    '12', '19', '24',
    '16', '20'
  ]
  );