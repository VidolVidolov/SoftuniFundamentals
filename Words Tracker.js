function solve(input) {
   
    let obj = {};

    let searchedWords = input.shift().split(' ');
    searchedWords.forEach(element => {
        obj[element] = 0;
    });;

   Object.keys(obj).forEach(key => {
       for (const word of input.slice(0)) {
           if(key === word){
               obj[key]++;
           }
       }
   });
   let sorted = Object.keys(obj).sort((a,b) => obj[b]- obj[a]);
   
   for (const key of sorted) {
       console.log(`${key} - ${obj[key]}`);
   }

}
solve([
    'sentence this', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
);