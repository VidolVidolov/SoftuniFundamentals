function oddOrEven(number) {

    let odds = separateOdd(number);
    let evens = separateEven(number);
    console.log(`Odd sum = ${odds}, Even sum = ${evens}`);
    

    function separateOdd(a) {

        let odd = 0;
        while (a > 0) {
            let cheker = a % 10;
            if (cheker % 2 !== 0) {
                odd += a % 10;
            }
            a = Math.trunc(a / 10);
        }
        return odd;
    }

    
    function separateEven(a) {

        let even = 0;
        while (a > 0) {
            let cheker = a % 10;
            if (cheker % 2 === 0) {
                even += a % 10;
            }
            a = Math.trunc(a / 10);
        }
        return even;
    }



}


oddOrEven(3495892137259234);