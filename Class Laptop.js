class Laptop{



    constructor(info, quality){
        this.info = info;
        this.quality = quality;
        this.isOn = false;
    }

    turnOn(isOn){
        this.isOn = true;
        this.quality --;
        // return this.isOn;
    }
    turnOff(isOff){
        this.quality --;
        this.isOn = false;
        // return this.isOn;
    }

    showInfo(){
        let info1 = JSON.stringify(this.info);
         return info1;
        
    }

    get price(){
        let price = Number(800 - (this.info.age *2) + (this.quality * 0.5));
        return price;
    }


}

let info = {producer: "Dell", age: 2, brand: "XPS"}
let laptop = new Laptop(info, 10)
laptop.turnOn()
console.log(laptop.showInfo())
laptop.turnOff()
console.log(laptop.quality)
laptop.turnOn()
console.log(laptop.isOn)
console.log(laptop.price)
