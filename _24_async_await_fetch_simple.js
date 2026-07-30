// The fetch() method is a built-in JavaScript API for making 
// HTTP requests — used to send requests to a server and 
// get a response back, most commonly to interact with APIs.
async function getDate() {
  const response = await fetch('https://timeapi.io/api/time/current/zone?timeZone=America/New_York');
  const data = await response.json();
  console.log(data.year);
}

getDate();

// - This code is a rewrite of the above code with then and catch
// - In general, using async/await is often preferred for 
//   readability and maintainability, especially when dealing with 
//   multiple asynchronous operations. 
fetch('https://timeapi.io/api/time/current/zone?timeZone=America/New_York')
  .then(response => response.json())
  .then(data => console.log(data.date))
  .catch(error => console.error('Error:', error));

// This code is a rewrite of the getDate() function above with error handling.
async function getDateWithErrorHandling() {
  try {
    const response = await fetch('https://timeapi.io/api/time/current/zone?timeZone=America/New_York');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data.year);
    return data;
  } catch (error) {
    console.error('Failed to fetch current time:', error.message);
    throw error; // re-throw if callers need to know it failed
  }
}

getDateWithErrorHandling();