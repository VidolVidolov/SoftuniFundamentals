function solve(array) {

    let object = {};
    let arrayStud = [];
    for (let i = 0; i < array.length; i++) {
        let element = array[i].split(', ');
        let atribute = element[0].split(' ');
        let name = atribute[2];
        atribute = element[1].split(' ');
        let grade = Number(atribute[1]);
        atribute = element[2].split(' ');
        let avgGrade = Number(atribute[5]);
        let person = { Grade: grade, Name: name, AverageScore: avgGrade };
        arrayStud.push({ person });

    }

    arrayStud.sort((a,b) => a.person.Grade - b.person.Grade );
   
   arrayStud.forEach( x => {
       if(x.person.AverageScore < 3){
           x.person.AverageScore = 'No';
       }
   });

   arrayStud.forEach(x => {
       if(x.person.Grade !== 'No'){
           x.person.Grade++;
       }
   });

   let currentGrade = 0;

    for (let i = 0; arrayStud.length > 0; i++) {
        let element = arrayStud[0];
        if(element.person.Grade !== 'No'){
            if(currentGrade !== element.person.Grade){
                currentGrade = element.person.Grade;
            }
                if(currentGrade <= 12 && element.person.AverageScore !== 'No'){
                    console.log(`${element.person.Grade} Grade`);
                    let listOfStudents = allStudents(arrayStud,currentGrade);
                    let avgGrade = avgGradeFunction(arrayStud,currentGrade);
                    console.log(`List of students: ${listOfStudents.join(', ')}`);
                    console.log(`Average annual grade from last year: ${avgGrade.toFixed(2)}`);
                    console.log(``);
    
                    let filter = filtered(arrayStud, currentGrade);
                    arrayStud = filter.slice();
                    currentGrade = element.person.Grade;
                }else{
                    arrayStud.shift();
                }
                
                
        
    }else{
        continue;
    }
}
    
    function allStudents(array1,grade){
        let names = [];
        array1.forEach(x => {
            if(x.person.Grade === grade && x.person.AverageScore !== 'No'){
                names.push(x.person.Name);
            }
        });
        return names;
    }

    function avgGradeFunction(arr,grade){
        let sum = 0;
        let counter = 0;
        arr.forEach(x => {
            if(x.person.Grade === grade && x.person.AverageScore !== 'No'){
                sum += x.person.AverageScore;
                counter++;
            }
        });
        if(sum === 0 && counter === 0){
            sum = 0;
        }else{
            sum = sum / counter;
        }
        return sum;
    }

    function filtered(arrayLol, grade){
        let masiv = [];
        arrayLol.forEach(x => {
            if(x.person.Grade === grade){

            }else{
                masiv.push(x);
            }
        })
        return masiv;

    }
}


solve([
    'Student name: Mark, Grade: 8, Graduated with an average score: 4.75',
    'Student name: Ethan, Grade: 9, Graduated with an average score: 5.66',
    'Student name: George, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Steven, Grade: 10, Graduated with an average score: 4.20',
    'Student name: Joey, Grade: 9, Graduated with an average score: 4.90',
    'Student name: Angus, Grade: 11, Graduated with an average score: 2.90',
    'Student name: Bob, Grade: 11, Graduated with an average score: 5.15',
    'Student name: Daryl, Grade: 8, Graduated with an average score: 5.95',
    'Student name: Bill, Grade: 9, Graduated with an average score: 6.00',
    'Student name: Philip, Grade: 10, Graduated with an average score: 5.05',
    'Student name: Peter, Grade: 11, Graduated with an average score: 4.88',
    'Student name: Gavin, Grade: 10, Graduated with an average score: 4.00'
  ]
  );