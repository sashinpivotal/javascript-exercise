async function getPost() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await response.json();
  console.log(data);
}

getPost();

// Note that the getPost() function is an async function, 
// which means it returns a Promise.
console.log("Type of async function:", typeof getPost); // Output: "function"
console.log("Type of async function:", getPost()); // Output: "Promise"

// Accessing specific properties from the fetched data
async function getPostTitle() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await response.json();
  console.log('Title:', data.title);
  console.log('userID:', data.userId);
}

getPostTitle();