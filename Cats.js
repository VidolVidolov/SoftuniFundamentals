function cats(array) {

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);

        }
    }

    let cats = [];
    for (let i = 0; i < array.length; i++) {
        let [name, age] = array[i].split(' ');
        let cat = new Cat(name, age);
        cats.push(cat);
    }

    // for (const iterator of cats) {
    //         iterator.meow();
    // }
    cats.map(x => x.meow());

}

cats(['Mellow 2', 'Tom 5']);