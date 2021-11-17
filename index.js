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
// console.log(numbers);
// console.log(person.friends);


const myModule = require("./utilities/myModule");

// console.log(myModule);

myModule.hello();
// console.log(myModule.hello());

const fs = require('fs');

fs.readFile('story.txt', 'utf8', function(err, data){
    if(err) {
        console.log("There was a problem reading the file.");
    } else {
        console.log(data);
    }
});

const http = require('http');

// http.createServer((req, res) => { 
//    res.write('Goodbye, World!');
//    res.end();
// })
// .listen(8000);

const faker = require('faker'); //generates random data
const { random } = require("faker");
let randomName = faker.name.findName();
console.log(randomName);

const randomAddress = {
    streetAddress: faker.address.streetAddress(),
    city: faker.address.city(),
    zipCode: faker.address.zipCode()
}
console.log(randomAddress);

// import the module
const axios = require('axios'); // allows to make API calls and retrieve data...

// There is a function that exist on the frontend that allows us to retrieve data. What function? - fetch

axios.get('https://api.github.com/users/romebell')
.then(function(response) {
    console.log(response.data);
})
.catch(function(err) {
    console.log(err);
});