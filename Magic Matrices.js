function solve(matrix) {

    let row = '';
    let colums = '';
    let sumRwos = 0;
    let sumColums = 0;
    let flag = false;
    for (let i = 0; i < matrix.length; i++) {

        for (let j = 0; j < matrix[i].length; j++) {
            sumRwos += matrix[i][j];
        }
        for (let j = 0; j < matrix[i].length; j++) {
            sumColums += matrix[j][i];

        }

        if (sumRwos === sumColums) {
            flag = true;
        } else {
            flag = false;
            break;
        }

        sumRwos = 0;
        sumColums = 0;

    }

    if (flag) {
        console.log('true');

    } else {
        console.log('false');

    }




}

solve([[0, 1, 2],
[2, 1, 0],
[1, 1, 1]
]


);