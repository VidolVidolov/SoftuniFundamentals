function solve(array){
    
    let elementsToBeProcessed = array.shift();

   let firstNums = array.slice(0,elementsToBeProcessed);
   let lastNums = array.slice(array.length - elementsToBeProcessed);

   console.log(firstNums.join(' '));
   console.log(lastNums.join(' '));
   

}
solve([2, 
     7, 8, 9]
    );