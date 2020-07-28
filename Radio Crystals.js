function radioCrystals(array) {

    let wantedThickness = array[0];

    for (let i = 1; i < array.length; i++) {
        let currentCrystal = array[i];
        console.log(`Processing chunk ${currentCrystal} microns`);
        let counter = 0;

        while (currentCrystal > wantedThickness) {
            if (cut(currentCrystal) < wantedThickness) {
                break;
            }
            counter++;
            currentCrystal = cut(currentCrystal);
        }

        console.log(`Cut x${counter}`);
        transport(currentCrystal);
        console.log('Transporting and washing');     
        counter = 0;

        while(currentCrystal > wantedThickness){
            if(lap(currentCrystal) < wantedThickness){
                break;
            }
            counter++;
            currentCrystal = lap(currentCrystal);
        }

        console.log(`Lap x${counter}`);
        transport(currentCrystal);
        console.log('Transporting and washing');     
        counter = 0;
        
        while(currentCrystal > wantedThickness){
            if(grind(currentCrystal) < wantedThickness){
                break;
            }
            counter++;
            currentCrystal = grind(currentCrystal);
        }
        console.log(`Grind x${counter}`);
        transport(currentCrystal);
        console.log('Transporting and washing');     
        counter = 0;

        while(currentCrystal > wantedThickness){
            if(etch(currentCrystal) + xray(currentCrystal) > wantedThickness){
                counter++;
                currentCrystal = etch(currentCrystal);
            }else{
                break;
            }
            
        }
        console.log(`Etch x${counter}`);
        transport(currentCrystal);
        console.log('Transporting and washing');     
        counter = 0;

        while(currentCrystal < wantedThickness){
            counter++;
            currentCrystal = xray(currentCrystal);
        }
        console.log(`X-ray x${counter}`);    
        counter = 0;
        console.log(`Finished crystal ${wantedThickness} microns`);
    }


    function cut(crystal) {
        return crystal / 4;
    }

    function lap(crystal){
        return crystal * 0.8;
    }
    function grind(crystal){
        return crystal -= 20;
    }
    function etch(crystal){
        return crystal -=2;
    }
    function xray(crystal){
        return crystal +=1;
    }
    function transport(crystal){
        return Math.floor(crystal);
    }


}



radioCrystals([1375, 50000]);