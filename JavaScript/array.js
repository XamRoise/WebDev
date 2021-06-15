//create arrays
const numbers = [43, 56, 55, 23, 54, 36, 5, 250];
const numbers2 = new Array(01, 20, 21, 09, 19); //okay with or without content
const fruits = ['Apple Orange', 'Almond', 'Apple Mango', 'Alpaca', 'Amor', 'Arts', 'Ant'];
const mixed = [22, 'Hello', true, undefined, null, { a: 1, b: 2 }, new Date()];

let val;

//get array length
val = numbers.length;
//check if is array
val = Array.isArray(numbers)
//get single value
val = numbers[3];
val = numbers[0];
//insert into array
numbers[2] = 100;
//find index of value
val = numbers.indexOf(43);


//mutating arrays
//add on to end
numbers.push(250);

//add on to front
numbers.unshift(120);
//take off from end
numbers.pop();
//take off from front
numbers.shift();
//splice value
//numbers.splice(0, 3);
//reverse
numbers.reverse();

val = numbers.concat(numbers2);
//val = numbers.sort();
//val = numbers.sort(function (x, y) {
//return x - y;
//}); //sequence na siya... from lowest to highest

//sorting arrays
//val = fruits.sort();

//find
function over50(num) {
    return num > 50;
}

val = numbers.find(over50);

console.log(val);
