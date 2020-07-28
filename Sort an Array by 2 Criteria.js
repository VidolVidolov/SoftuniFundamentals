function sortanArrayby2Criteria(array){


    console.log(array.sort(customSort).join(`\n`));

    function customSort(a,b){

        if(a.length > b.length){
            return 1;
        }else if(a.length < b.length){
            return -1;
        }else{
            return a.localeCompare(b);
        }
    }

}

sortanArrayby2Criteria(["Isacc", "Theodor", "Jack", "Harrison", "George", 'Aary']);