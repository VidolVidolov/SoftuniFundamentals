function solve(input){

    let object = new Map();

    let array = input.split(' ').map(a => a.toLowerCase()).forEach(element => {
        if(object.has(element)){
            let num = object.get(element) +1;
            object.set(element, num);
        }else{
            object.set(element, 1);
        }
    });;
    let arr = [];
    let print = Array.from(object.entries());
    print.forEach(([key,value])=> {
        let num = Number(value);
        if(num % 2 !== 0){
            arr.push(key);
        }

    });

    console.log(arr.join(' '));

}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');