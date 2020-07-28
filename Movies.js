function solve(array) {

    let moviesArr = [];
    for (let i = 0; i < array.length; i++) {
        let element = array[i].split(' ');
        
        if (element.find(x => x === 'addMovie')) {
            moviesArr.push({name: element.slice(1).join(' ')})
        }
        if (element.find(x => x === 'directedBy')) {
            let index = element.indexOf('directedBy');
            let filmName = element.slice(0,index).join(' ');
            let director = element.slice(index+1).join(' ');
            moviesArr.forEach(x => {
                if(x.name === filmName){
                    x.director = director;
                }
            });

        } if (element.find(x => x === 'onDate')) {
            let index = element.indexOf('onDate');
            let filmName = element.slice(0,index).join(' ');
            let date = element.slice(index+1).join(' ');
            
            moviesArr.forEach(x => {
                if(x.name === filmName){
                    x.date = date; 
                }
            });

        }
     
    }

    moviesArr.forEach(x=>{
        if(x.name !== undefined && x.director !== undefined && x.date !== undefined){
            let item = JSON.stringify(x);
            console.log(item);
        }
        
        
    })


}

solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
);