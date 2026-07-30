function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({ id, name: "Alice" });
      } else {
        reject(new Error("Invalid user ID"));
      }
    }, 500);
  });
}

fetchUser(1)
  .then(user => console.log("Got user:", user))
  .catch(err => console.error("Error:", err.message));

// Chaining promises
fetchUser(1)
  .then(user => {
    console.log("Step 1:", user);
    return fetchUser(2); // return another Promise
  })
  .then(user2 => {
    console.log("Step 2:", user2);
  })
  .catch(err => console.error("Error in chain:", err.message));

// Running multiple promises in parallel
const p1 = fetchUser(1);
const p2 = fetchUser(2);
const p3 = fetchUser(3);

Promise.all([p1, p2, p3])
  .then(users => {
    console.log("All users:", users); // array of results, in order
  })
  .catch(err => {
    console.error("At least one failed:", err.message); // fails fast if any reject
  });