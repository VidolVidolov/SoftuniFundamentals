function solve(input) {

    let students = {};

    for (const line of input) {
        let element = line.split(' ');
        let name = element.shift();
        let grades = element.slice(0);

        if (students[name]) {
            let concated = students[name].concat(grades);
            students[name] = concated;
        } else {
            students[name] = grades;
        }
    }

    let smt = Object.entries(students).sort((a, b) => {
        let studentGradeA = a[1].map(Number);
        let studentGradeB = b[1].map(Number);

        let avgA = avarage(studentGradeA)
        let avgB = avarage(studentGradeB);
        return avgA - avgB;
    })

    function avarage(grades) {

        let avg = 0;
        for (const iterator of grades) {
            avg += iterator;
        }
        avg /= grades.length;
        return avg;
    }

    for (const kvp of smt) {
        console.log(`${kvp[0]}: ${kvp[1].join(', ')}`);

    }
}

solve(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
);