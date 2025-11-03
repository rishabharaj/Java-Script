// concatination using template literals
const firstName = "John";
const lastName = "Doe";
const age = 30;
const city = "New York";
const bio = `My name is ${firstName} ${lastName}. I am ${age} years old and I live in ${city}.`;
console.log(bio); // My name is John Doe. I am 30 years old and I live in New York.
// multiline strings using template literals
const multiLineString = `This is a string
that spans multiple
lines.`;
console.log(multiLineString);
// This is a string
// that spans multiple
// lines.
// expression interpolation
const a = 5;
const b = 10;
const sumString = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(sumString); // The sum of 5 and 10 is 15.
// nested template literals
const user = {
    name: "Alice",
    age: 25,
    location: "Wonderland"
};
const userInfo = `User Info: ${`Name: ${user.name}, Age: ${user.age}, Location: ${user.location}`}`;
console.log(userInfo); // User Info: Name: Alice, Age: 25, Location: Wonderland
// tagged template literals
function tag(strings, ...values) {
    return strings.raw[0] + values.map((value, index) => `${value}${strings.raw[index + 1]}`).join('');
}
const taggedString = tag`Hello ${firstName}, you are ${age} years old.`;
console.log(taggedString); // Hello John, you are 30 years old.
// escaping backticks and dollar signs
const escapedString = `This is a backtick: \` and this is a dollar sign: \$`;
console.log(escapedString); // This is a backtick: ` and this is a dollar sign: $
// using functions inside template literals
function greet(name) {
    return `Hello, ${name}!`;
}
const greeting = `${greet(firstName)} Welcome to ${city}.`;
console.log(greeting); // Hello, John! Welcome to New York.
// conditional expressions
const isAdult = age >= 18 ? 'an adult' : 'a minor';
const ageString = `You are ${isAdult}.`;
console.log(ageString); // You are an adult.
// Using template literals for HTML generation
const html = `<div>
    <h1>${firstName} ${lastName}</h1>
    <p>Age: ${age}</p>
    <p>City: ${city}</p>
</div>`;
console.log(html);
// <div>
//     <h1>John Doe</h1>
//     <p>Age: 30</p>
//     <p>City: New York</p>
// </div>
// Using template literals for SQL queries
const tableName = "users";
const sqlQuery = `SELECT * FROM ${tableName} WHERE age > ${age};`;
console.log(sqlQuery); // SELECT * FROM users WHERE age > 30;
// Using template literals for URL construction

const baseURL = "https://api.example.com";
const endpoint = "getUser";
const url = `${baseURL}/${endpoint}?name=${firstName}&age=${age}`;
console.log(url); // https://api.example.com/getUser?name=John&age=30
// Using template literals for logging
console.log(`User ${firstName} ${lastName} from ${city} is ${age} years old.`);
// User John Doe from New York is 30 years old.
// Using template literals for file paths
const filePath = `/users/${firstName.toLowerCase()}/${lastName.toLowerCase()}/profile.txt`;
console.log(filePath); // /users/john/doe/profile.txt
// Using template literals for configuration settings
const config = {
    apiUrl: `${baseURL}/api`,
    timeout: 5000,
    retries: 3
};
console.log

(config);
// { apiUrl: 'https://api.example.com/api', timeout: 5000, retries: 3 }

// order- first * /
//        then + -
//        if both are together then left to right calculate
let m = 10 + 20 * 30 - 40 / 50;
let k = 0.1 + 0.2;
console.log(m); // 609.2
console.log(k); // 0.30000000000000004
// how to fix floating point precision issue
// remove decimal points
// for example for adding 20.95 + 7.99 gives 28.93999999999998
// so multiply both by 100 and then add 2095 + 799 = 2894
// then divide by 100 to get 28.94

let c = (20.95 * 100 + 7.99 * 100) / 100;
console.log(c); // 28.94
//rounding off numbers
    let d = Math.round(2.8);
    console.log(d);
    let e = (2095 + 799 + 1899 + 499) / 100 + Math.round((2095 + 799 + 1899 + 499) * 0.1) / 100;
    console.log(e); // 57.92
