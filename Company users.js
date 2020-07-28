function solve(array){

    let list = fillingList(array);
    
    let sorted = Object.keys(list).sort((a,b) => a.localeCompare(b));
    
    for (const key of sorted) {
        Object.keys(list).forEach(item => {
            if(item === key){
                console.log(`${key}`);
                let setObj = list[key].values(key);
                for (const kliuch of setObj) {
                console.log(`-- ${kliuch}`);
                    
                }
            }
        })
    }


    function fillingList(arr){

        let object = {};

        arr.forEach(element => {
            let [company, id] = element.split(' -> ');
            if(!object[company]){
                object[company] = new Set();
                object[company].add(id)
            }else{
                object[company].add(id);
            }
        });
        return object;
    }





}

solve([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]
    );