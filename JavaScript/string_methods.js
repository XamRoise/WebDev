const firstName = 'James';
const lastName = 'Reid';
const age = 28;
const str = 'Hello James! My name is Larry';
const tag = 'Web Development, Web Design, Programming';

let val;
val = firstName + lastName;

//concatenation
val = firstName + '' + lastName;

//append
val = 'Bobby';
val += 'Ferre';

val = 'Hello my name is ' + firstName + ' and I am ' + age;

//escaping
val = "That's awesome. I can't wait to see!";

//length
val = firstName.length;

//concat()
val = firstName.concat('', lastName)

val = firstName.toLowerCase();
val = firstName.toUpperCase();

val = firstName[1];

//indexOf()
val = firstName.indexOf('m');
val = firstName.lastIndexOf('m');

//charAt()
val = firstName.charAt('0');
val = firstName.charAt(firstName.length - 1);

val = firstName.substring(1, 4)

val = firstName.slice(1, 4);
val = firstName.slice(-3);

val = str.split(' ');
val = str.split('');

val = str.replace('Larry', 'Samantha');

val = str.includes('names');

console.log(val);
