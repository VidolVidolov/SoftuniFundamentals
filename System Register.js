function register(array) {

    let object = {};

    for (let i = 0; i < array.length; i++) {
        let [system, component, subcomponent] = array[i].split(' | ');
        if (object[system]) {
            if (object[system][component]) {
                object[system][component].push(component);
            } else {
                object[system][component] = [subcomponent];
            }
        } else {
            object[system] = {};
            object[system][component] = [subcomponent];
        }

    }
    
    Object.keys(object).sort((a,b) => Object.keys(object[b]).length - Object.keys(object[a]).length || a.toLowerCase().localeCompare(b.toLocaleLowerCase()));
    console.log(object);
    
    
        
    
    
}

register([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]
);