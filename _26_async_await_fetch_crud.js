const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

// CREATE - Add a new post
async function createPost(postData) {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postData)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Post created:', data);
    return data;
  } catch (error) {
    console.error('Error creating post:', error.message);
    throw error;
  }
}

// READ - Get all posts
async function getPosts() {
  try {
    const response = await fetch(BASE_URL);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(`Fetched ${data.length} posts`);
    return data;
  } catch (error) {
    console.error('Error fetching posts:', error.message);
    throw error;
  }
}

// READ - Get a single post by ID
async function getPostById(id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Post fetched:', data);
    return data;
  } catch (error) {
    console.error(`Error fetching post ${id}:`, error.message);
    throw error;
  }
}

// UPDATE - Modify an existing post
async function updatePost(id, updatedData) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedData)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Post updated:', data);
    return data;
  } catch (error) {
    console.error(`Error updating post ${id}:`, error.message);
    throw error;
  }
}

// DELETE - Remove a post
async function deletePost(id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE'
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    console.log(`Post ${id} deleted successfully`);
    return true;
  } catch (error) {
    console.error(`Error deleting post ${id}:`, error.message);
    throw error;
  }
}

// Example usage
async function runCrudExample() {
  try {
    // Create
    const newPost = await createPost({
      title: 'My New Post',
      body: 'This is the content of my post.',
      userId: 1
    });

    // Read all (first 5 for brevity)
    const allPosts = await getPosts();
    console.log('First 5 posts:', allPosts.slice(0, 5));

    // Read one (existing post, since fake IDs like 101 won't be found)
    await getPostById(1);

    // Update
    await updatePost(1, {
      id: 1,
      title: 'Updated Title',
      body: 'Updated content.',
      userId: 1
    });

    // Delete
    await deletePost(1);
  } catch (error) {
    console.error('CRUD operation failed:', error.message);
  }
}

runCrudExample();