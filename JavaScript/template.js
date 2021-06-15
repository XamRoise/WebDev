const name = 'John';
const age = 28;
const job = 'Web Developer';
const city = 'Makati';
let html;

//without templete string (es5)
html = ' <ul><li>Name: ' + name + ' </li><li>Age: ' + age + ' </li><li> ' + job + ' </li><li>City: ' + city + ' </li></ul>'

function hello() {
    return 'Hello';
}

//with template strings (es6)
html = `<ul>
            <li>Name: ${name}</li>
            <li>Age: ${age}</li>
            <li>Job: ${job}</li>
            <li>City: ${city}</li>
            <li>${hello()}</li>
            <li>${age > 30 ? 'Over 30' : 'Under30'}</li> 
        </ul>`