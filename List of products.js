function ListOfProducts(arr){


    // let sortedArr = arr.sort((a, b) => a.localeCompare(b));
    // for (let i = 0; i < sortedArr.length; i++) {
    //     console.log(`${i+1}.${sortedArr[i]}`);
    // } - 80 points


    
    let sortedArr = arr.sort();
    for (let i = 0; i < sortedArr.length; i++) {
        console.log(`${i+1}.${sortedArr[i]}`);
    }
    
}

ListOfProducts(["Potatoes", "tomatoes", "onions", "apples"]);