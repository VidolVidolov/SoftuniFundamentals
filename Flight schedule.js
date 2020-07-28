function solve(input) {

    let flights = {};

    input.shift().forEach(flight => {
       let [sector, destination] = flight.split(' ');
       flights[sector] = {Destination: destination, Status: 'Ready to fly'};
    });

    input.shift().forEach(flight => {
        let [sector, status] = flight.split(' ');
        if(flights[sector]){
            flights[sector].Status = status;
        }
    });
    
    let search = input.shift();

    Object.entries(flights).forEach(([key,value]) => {
        if(value.Status === search[0]){
            console.log(value);
            
        }

    })

    
  

}

solve([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK430 Cancelled'],
 ['Cancelled']
]
);