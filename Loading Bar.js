function loadingBar(number){

    let percentLoaded = load(number);
    let loadingBar = bar(number);

    if(loadingBar !== `%%%%%%%%%%`){
        console.log(`${number}% [${loadingBar}]`);
        console.log('Still loading...');
        
    }else{
        console.log(`${number}% Complete!`);
        console.log(`[${loadingBar}]`);
        
    }
    
    
    function load(percent){

        let result = '';
        for (let i = 0; i < percent / 10; i++) {
            result += '%';
            
        }
        return result;
    }
    function bar(num){

        let bar = (100 - num) / 10;
        let percent = load(num);

        for (let i = 0; i < bar; i++) {
            percent+= '.';
            
        }
        return percent;
    }

}


loadingBar(100);