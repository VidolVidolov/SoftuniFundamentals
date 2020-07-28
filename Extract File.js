function solve(text) {

    let index = text.lastIndexOf('\\');
    let nameAndExtnsion = text.substring(index + 1);

    let indexOfDot = nameAndExtnsion.lastIndexOf('.');
    let extension = nameAndExtnsion.substring(indexOfDot + 1);
    let name = nameAndExtnsion.substring(0, indexOfDot);

    console.log(`File name: ${name}`);
    console.log(`File extension: ${extension}`);

}

solve('C:\\Internal\\training-internal\\Template.pptx');