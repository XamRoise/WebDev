let val;

//number to string (show number)
val = String(888);
val = String(4 + 4);

//bool to string
val = String(true);

//Date to string
val = String(new Date());

//array to string
val = String([1, 2, 3]);

val = (3).toString()
val = true.toString();

//string to number
val = Number('5');
val = Number(true); //1
val = Number(false); //0
val = Number(null); //0

val = Number([1, 2, 3]); //not a number

val = parseInt('100.40'); //show the number round off in whole number
val = parseFloat('100.40')

//output

const val1 = String(5);
const val2 = 6;
const sum = Number(val1 + val2);
console.log(val);

//number to string (show string)
val = String(888);

console.log(typeof val)