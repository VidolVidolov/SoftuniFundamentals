function numbers(array) {


   let func = function (array){
       let result = [];
    for (let i = 0; i < array.length; i++) {
        if(array[i] < 0){
            result.unshift(array[i]);
        }else{
            result.push(array[i]);
        }
        
    }
    return result;
   } 

   let result = func(array);
   
    for (const element of result) {
        console.log(element);
        
    }
}

numbers([7, -2, 8, 9]);