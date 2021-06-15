const person = {
    firstName: 'Steve', //called property
    lastName: 'Smith',
    age: 28,
    email: 'smith@gmail.com',
    hobbies: ['watching tv', 'eating', 'sleeping', 'breathing'],
    address: {
        city: 'Manila',
        street: 'Rubi',
        postal: 7710,
    },
    getBithYear: function () {
        return 2021 - this.age;
    }
}

let val;

val = person;
val = person.firstName;
val = person.getBithYear();
val = person.address['city'];
val = person.hobbies[2];

const people = [{ name: 'John', age: 18 }, { name: 'Kim', age: 16 }, { name: 'Kris', age: 20 }];

//for loop
//use let as variable

for (let x = 0; x < people.length; x++) {

}

console.log(val);