function solve(radius, height){

    let volume = (1/3) * Math.PI * radius* radius * height;
    let areaBase = Math.PI * radius * radius;
    let areaAll = areaBase + Math.PI * radius * Math.sqrt(radius * radius + height * height);

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${areaAll.toFixed(4)}`);
    



}

solve(3,5);