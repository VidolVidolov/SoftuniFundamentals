function solve(input) {

    let pattern = /([#|])(?<name>[A-Za-z\s]+)\1(?<expDate>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g;
    let food = [];
    let string = input.shift();
    let allCalories = 0;
    let result = pattern.exec(string);

    while (result) {
        let name = result.groups.name;
        let expDate = result.groups.expDate;
        let calories = Number(result.groups.calories);
        allCalories += calories;
        food.push(`Item: ${name}, Best before: ${expDate}, Nutrition: ${calories}`);
        result = pattern.exec(string);
    }
    let days = Math.floor(allCalories / 2000);
    console.log(`You have food to last you for: ${days} days!`);
    for (const iterator of food) {
        console.log(iterator);
    }

}
solve([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
]
);