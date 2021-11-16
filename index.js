const numbers = [1,2,3,5,8,18,21];
const person = {
    name: "Usagi Tsukino",
    age: 15,
    friends: ["Ami", "Rei", "Makoto", "Minako"],
    series: {
        title: "Sailor Moon",
        movies: 3,
        status: "Best show ever"
    }
}
console.log(numbers);
console.log(person.friends);


const myModule = require("./utilities/myModule");

console.log(myModule);

myModule.hello();
console.log(myModule.hello());
