function solve(arrayOne, arrayTwo){

    let newArray= [];
    let result = '';
    for (let i = 0; i < arrayOne.length; i++) {

        if(i % 2 === 0){
            newArray[i] = (Number(arrayOne[i]) + Number(arrayTwo[i]));
        }else{
            newArray[i] = arrayOne[i] + arrayTwo[i];
        }
        
    }

    
    

   
    console.log(newArray.join(' - '))


}

solve(['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44']

);