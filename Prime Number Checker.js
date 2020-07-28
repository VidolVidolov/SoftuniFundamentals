
function isPrime(num) {
    let flag = false;
    for (let i = 2; i < num; i++)
        if (num % i === 0) {
            break;
        } else {
            flag = true;
        }

    if (flag) {
        console.log('true');

    } else {
        console.log('false');

    }



}



isPrime(8);