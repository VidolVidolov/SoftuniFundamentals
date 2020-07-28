function solve(input) {

    let shelf = {};

    for (const iterator of input) {

        if (iterator.includes(' -> ')) {
            let line = iterator.split(' -> ');
            let shelfId = line[0];
            let shefGenre = line[1];

            if (!shelf[shelfId]) {
                let obj = {};
                obj[shefGenre] = [];
                shelf[shelfId] = obj;

            }
        } else if (iterator.includes(': ')) {
            let line = iterator.split(': ');
            let bookTitle = line[0];
            let [author, genre] = line[1].split(', ');

            let book = {};
            book[bookTitle] = {};
            book[bookTitle] = author;

            for (const key in shelf) {
                let check = Object.keys(shelf[key])[0];
                if (check === genre) {
                    shelf[key][genre].push(book);
                }
            }
        }
    }

    let sortedShelfs = Object.values(shelf);
    sortedShelfs = sortedShelfs.sort((a,b) => {
        let shelfOne = Object.values(a);
        shelfOne = calculateBooks(shelfOne);
        let shelfTwo = Object.values(b);
        shelfTwo = calculateBooks(shelfTwo);
        return shelfTwo - shelfOne;
    });
    
    for (const iterator of sortedShelfs) {
       for (const key in iterator) {
           Object.keys(shelf).forEach(id => {
               let check = Object.keys(shelf[id])[0];
               if(check === key){
                   console.log(`${id} ${key}: ${shelf[id][key].length}`);
                   let sortedBooks = shelf[id][key].sort((a,b) => {
                      let A = Object.keys(a)[0];
                      let B = Object.keys(b)[0];

                      A.localeCompare(B);

                    });
                   Object.entries(sortedBooks).forEach(([key, value]) => {
                    for (const key in value) {
                        console.log(`--> ${key}: ${value[key]}`);
                    }
                   })
               }
           })
       }
    }

    function calculateBooks(object){

        let sum = 0;
        for (const iterator of object[0]) {
            sum++;
        }
        return sum;
    }

}

solve(['1 -> history', '1 -> action', 'Death in Time: Criss Bell, mystery', '2 -> mystery', '3 -> sci-fi', 'Child of Silver: Bruce Rich, mystery', 'Hurting Secrets: Dustin Bolt, action', 'Future of Dawn: Aiden Rose, sci-fi', 'Lions and Rats: Gabe Roads, history', '2 -> romance', 'Effect of the Void: Shay B, romance', 'Losing Dreams: Gail Starr, sci-fi', 'Name of Earth: Jo Bell, sci-fi', 'Pilots of Stone: Brook Jay, history']);