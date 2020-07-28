function convert(jsonFormat){

    let converted = JSON.parse(jsonFormat);

    for(let key in converted){
        console.log(`${key}: ${converted[key]}`);
        
    }
    
}

convert('{"name": "George", "age": 40, "town": "Sofia"}');