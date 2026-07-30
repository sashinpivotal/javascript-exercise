function fetchUser(id, callback) {
  setTimeout(() => callback(null, { id, name: "Alice" }), 500);
}

function fetchPosts(userId, callback) {
  setTimeout(() => callback(null, ["Post 1", "Post 2"]), 500);
}

function fetchComments(postId, callback) {
  setTimeout(() => callback(null, ["Comment A", "Comment B"]), 500);
}

// Example of callback hell — deeply nested callbacks
// Nested, indented, hard to follow — the "pyramid of doom"
fetchUser(1, (err, user) => {
  if (err) return console.error(err);
  console.log("1-User:", user);

  fetchPosts(user.id, (err, posts) => {
    if (err) return console.error(err);
    console.log("Posts:", posts);

    fetchComments(posts[0], (err, comments) => {
      if (err) return console.error(err);
      console.log("1-Comments:", comments);
      // this could keep nesting deeper and deeper...
    });
  });
  
});


// - Refactored using Promises
// - Promises flatten the structure and make it easier to read
// - Promise object are usally created with resolve and reject functions, 
//   which are called to indicate success or failure of the asynchronous 
//   operation.
function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({ id, name: "Alice" }), 500);
  });
}

// - Promise object can be created with just resolve function, 
//   if we don't need to handle errors.
function fetchPosts(userId) {
  return new Promise(resolve => {
    setTimeout(() => resolve(["Post 1", "Post 2"]), 500);
  });
}

function fetchComments(postId) {
  return new Promise(resolve => {
    setTimeout(() => resolve(["Comment A", "Comment B"]), 500);
  });
}

// Chained instead of nested — flatter, but still a bit verbose
fetchUser(1)
  .then(user => {
    console.log("2-User:", user);
    return fetchPosts(user.id);
  })
  .then(posts => {
    console.log("2-Posts:", posts);
    return fetchComments(posts[0]);
  })
  .then(comments => {
    console.log("2-Comments:", comments);
  })
  .catch(err => console.error("Error:", err));

// Refactored using async/await — flat and easy to read
async function loadEverything() {
  try {
    const user = await fetchUser(1);
    console.log("3-User:", user);

    const posts = await fetchPosts(user.id);
    console.log("3-Posts:", posts);

    const comments = await fetchComments(posts[0]);
    console.log("3-Comments:", comments);
  } catch (err) {
    console.error("Error:", err);
  }
}

loadEverything();

