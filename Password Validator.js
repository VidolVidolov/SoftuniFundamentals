function passwordValidator(pass){

    let lenght = checkPassLength(pass);
    let containability = containsLetterAndDigits(pass);
    let minDigit = minimumDigitNumber(pass);

    if(lenght && containability && minDigit){
        console.log(`Password is valid`);
        
    }
    if(!lenght){
        console.log("Password must be between 6 and 10 characters");
        
    }
    if(!containability){
        console.log("Password must consist only of letters and digits");
        
    } if(!minDigit){
        console.log("Password must have at least 2 digits");
        
    }

    function checkPassLength(password){
        let counter = 0;
        for (let i = 0; i < password.length; i++) {
            counter++;
        }
        if(counter < 6 || counter > 10){
            return false;
        }else{
            return true;
        }
    }

    function containsLetterAndDigits(password){

        let isOk = true;
        for (let i = 0; i < password.length; i++) {
            let element = password[i].charCodeAt(0);
            if((element >= 65 && element <= 90) || (element >= 48 && element <= 57) || (element >= 97 && element <= 122)){
                
            }else{
                isOk = false;
                break;
                
            }

        }
        return isOk;
    }

    function minimumDigitNumber(pass){
        let counter = 0;
        let isOk = true;
        for (let i = 0; i < pass.length; i++) {
           let element = pass[i].charCodeAt(0);
            if(element >= 48 && element <= 57){
                counter++;
            }

        }
        if(counter < 2){
            isOk = false;
        }
        return isOk;
    }


}

passwordValidator('MyPass123');