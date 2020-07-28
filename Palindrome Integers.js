function palindromeIntegers(array){

    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        let result = Number(checkPolidrome(element));
        if(element === result){
            console.log(`true`);
            
        }else{
            console.log(`false`);
        }

        
    }

    function checkPolidrome(number){
        let strNum = number.toString();
        let reversed = '';
        for (let i = strNum.length - 1; i >= 0; i--) {
                reversed += strNum[i];
            
        }
        return reversed;
    }

}


palindromeIntegers([32,2,232,1010]);