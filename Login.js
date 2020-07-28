function solve(input){

    let username = input.shift();
    let counter = 0;
    username = username.split('').reverse().join('');
    while(true){
        let usernameTry = input.shift();
        
        
        if(usernameTry == username){
            username = username.split('').reverse().join('');

            console.log(`User ${username} logged in.`);
            break;
        }else{
            console.log(`Incorrect password. Try again.`);
            counter++;
        }

        if(counter === 3){
            username = username.split('').reverse().join('');
            console.log(`User ${username} blocked!`);
            break;
        }
    
    }

}


solve(['sunny','rainy','cloudy','sunny','not sunny']);