const jsonString = '{"name": "Alice", "age": 30}';
const obj = JSON.parse(jsonString);

console.log(obj);       // { name: 'Alice', age: 30 }
console.log(obj.name);  // "Alice"
console.log(obj.age);   // 30

// Parsing nested objects
const jsonString2 = `{
  "user": {
    "name": "Bob",
    "address": {
      "city": "Boston",
      "zip": "02101"
    }
  },
  "tags": ["admin", "editor"]
}`;

const data = JSON.parse(jsonString2);
console.log(data.user.name);          // "Bob"
console.log(data.user.address.city);  // "Boston"
console.log(data.tags[0]);            // "admin"

// REST example
async function getPost() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const text = await response.text();       // raw JSON string
  const data = JSON.parse(text);            // manually parse it
  console.log(data);
}

getPost();

// This is equivalent to the more common shortcut:
async function getPostShortcut() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await response.json();       // does fetch text() + JSON.parse() for you
  console.log(data);
}

// Converting an object to a JSON string
const person = { name: "Alice", age: 30, isAdmin: false };

const jsonString3 = JSON.stringify(person);
console.log(jsonString);
// '{"name":"Alice","age":30,"isAdmin":false}'

console.log(typeof jsonString); // "string"