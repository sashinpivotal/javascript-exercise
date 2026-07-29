// Defining a simple promise that resolves after 1 second
const myPromise = new Promise((resolve, reject) => {
  const success = true;

  setTimeout(() => {
    if (success) {
      resolve("Operation succeeded!");
    } else {
      reject("Operation failed!");
    }
  }, 1000);
});

// Consuming a promise with .then() and .catch()
myPromise
  .then(result => {
    console.log(result); // "Operation succeeded!"
  })
  .catch(error => {
    console.error(error);
  });

// Consuming a promise with async/await
async function run() {
  try {
    const result = await myPromise;
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

run();