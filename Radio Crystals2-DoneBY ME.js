function radioCrystals(array) {

    let wantedThickness = array[0];

    for (let i = 1; i < array.length; i++) {
        let currentCrystal = array[i];
        console.log(`Processing chunk ${currentCrystal} microns`);
        if (currentCrystal / 4 >= wantedThickness) {
            currentCrystal = cut(currentCrystal);
        }
        if (currentCrystal * 0.8 >= wantedThickness) {
            currentCrystal = lap(currentCrystal);
        }
        if (currentCrystal - 20 >= wantedThickness) {
            currentCrystal = grind(currentCrystal);
        }
        if (currentCrystal - 2 >= wantedThickness) {
            currentCrystal = etch(currentCrystal);
        }
        if (currentCrystal != wantedThickness) {
            currentCrystal = xray(currentCrystal);
        }

        console.log(`Finished crystal ${currentCrystal} microns`);
    }


    function cut(crystal) {
        let counter = 0;
        let newCrystal = crystal;

        while (crystal / 4 >= wantedThickness) {
            counter++;
            crystal = crystal / 4;
            newCrystal = crystal;
        }

        console.log(`Cut x${counter}`);
        newCrystal = transport(newCrystal);
        console.log('Transporting and washing');
        return newCrystal;
    }

    function lap(crystal) {
        let counter = 0;
        let newCrystal = crystal;
        while (crystal * 0.8 >= wantedThickness) {
            counter++;
            crystal = crystal * 0.8;
            newCrystal = crystal;
        }

        console.log(`Lap x${counter}`);

        newCrystal = transport(newCrystal);
        console.log('Transporting and washing');
        return newCrystal;
    }

    function grind(crystal) {
        let counter = 0;
        let newCrystal = crystal;
        while (crystal - 20 >= wantedThickness) {
            counter++;
            crystal -= 20;
            newCrystal = crystal;
        }
        console.log(`Grind x${counter}`);
        newCrystal = transport(newCrystal);
        console.log('Transporting and washing');
        return newCrystal;
    }

    function etch(crystal) {
        let counter = 0;
        let newCrystal = crystal;
        while (crystal - 2 >= wantedThickness - 1) {
            counter++;
            crystal -= 2;
            newCrystal = crystal;
        }
        console.log(`Etch x${counter}`);
        newCrystal = transport(newCrystal);
        console.log('Transporting and washing');
        return newCrystal;
    }

    function xray(crystal) {
        let counter = 0;;
        while (crystal != wantedThickness) {
            counter++;
            crystal = crystal + 1;
        }
        console.log(`X-ray x${counter}`);
        return crystal;
    }

    function transport(crystal) {
        crystal = Math.floor(crystal);
        return crystal;
    }


}



radioCrystals([1000, 2000]);