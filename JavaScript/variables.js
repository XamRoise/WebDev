//var, let, const (changeable content from John Doe to Steve Smith))

var name = 'John Doe';
console.log(name);
name = 'Steve Smith';
console.log(name);

//init var (flexible from no content to with content)
var greeting;
console.log(greeting);
greeting = 'Hello'
console.log(greeting);

//letters, numbers, _, $
// Cannot start with number

//Multi Word Vars
var firstName = 'John';//Camel case
var first_name = 'Sara' //Underscore
var FirstNama = 'Kim' //Pascal case (be careful for reserve word)

//LET (upgraded of var)
let name;
name = 'John Doe';
console.log(name);
name = 'Steve Smith';
console.log(name);

//const
const name = 'John';
console.log(name);
//cannot reassign
name = 'Sara';
console.log(name);

//change si const dhl ang name and age is properties
const person {
    name: 'John',
    age: 30
}

person.name = 'Sara';
person.age = '32'

console.log(person);

const numbers = [1, 2, 3, 4, 5];
numbers.push(6);

console.log(numbers);



