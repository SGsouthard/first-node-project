function itsAMe() {
    return "Hello Mario";
}

function gameOver() {
    return "Good-bye Mario";
}

function oneUp(num1, num2) {
    return num1 + num2;
}

const person = {
    name: "Mario",
    age: 40,
    foods: ["mushrooms", "spaghetti"],
    games: {
        name: "Super Mario 64",
        console: "Nintendo 64",
        release: 1994
    }
}

class Character {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.introduction = function() {
            return "Hey";
        }
    }
}

module.exports = {
    hello: itsAMe,
    goodbye: gameOver,
    add: oneUp,
    character: Character,
    person
}