function delivery(array){

    let houses = array[0].split('@').map(Number);
    let jumps = array.slice(1);
    let counter = 0;
    let distance = 0;
    let currentIndex = 0;
    for (let i = 0; i < jumps.length; i++) {
        let element = jumps[i].split(' ');
        let isLove = element[0];
        if(element[0] ==='Love!'){
            break;
        }
        let jumpLength = Number(element[1]);
        currentIndex += jumpLength;
        if(currentIndex >= houses.length){
            currentIndex = 0;
        }
        if(houses[currentIndex] === 0){
            console.log(`Place ${currentIndex} already had Valentine's day.`);
            
        }else{
            houses[currentIndex] -= 2;
            if(houses[currentIndex] === 0){
                console.log(`Place ${currentIndex} has Valentine's day.`);
            }
        }
        
        
        
        
    }

    console.log(`Cupid's last position was ${currentIndex}.`);
    let count = 0;
    for (const iterator of houses) {
        if(iterator !== 0){
            count++;
        }
    }
    
    if(count === 0){
        console.log(`Mission was successful.`);
        
    }else{
        console.log(`Cupid has failed ${count} places.`);
        
    }
    

}

delivery([
    '2@4@2',  'Jump 2',
    'Jump 2', 'Jump 8',
    'Jump 3', 'Jump 1',
    'Love!'
  ]
  
);