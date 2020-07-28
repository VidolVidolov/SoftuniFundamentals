function solve(arr, rotations){

    let rotationsQuick = rotations % arr.length;
    let newArr =[];
    let result = '';
    for (let i = rotationsQuick; i < arr.length; i++) {

        newArr[i - rotationsQuick] = arr[i];
        
       
    }
    for (let i = 0; i < rotationsQuick; i++) {
        
        newArr[newArr.length] = arr[i];
    }
    
      
    for(let element of newArr){
        result += element + ' ';
    }
    console.log(result);
    
}

solve([51, 47, 32, 61, 21], 2);