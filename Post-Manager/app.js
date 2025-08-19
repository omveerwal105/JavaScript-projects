const postsContainer = document.getElementById("posts");
const form = document.getElementById("postForm");
const titleInput = document.getElementById("title");
const bodyInput = document.getElementById("body");

const API_URL = "https://jsonplaceholder.typicode.com/posts";

// Fetch & Display Posts
async function getAllPosts() {
  postsContainer.innerHTML = "Loading...";
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Failed to fetch posts");
    const data = await res.json();

    postsContainer.innerHTML = "";
    data.slice(0, 5).forEach((post) => {
      const div = document.createElement("div");
      div.className = "post";
      div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <button onclick="editPost(${post.id})">✏ Edit</button>
        <button onclick="deletePost(${post.id})">🗑 Delete</button>
      `;
      postsContainer.appendChild(div);
    });
  } catch (err) {
    postsContainer.innerHTML = "Error loading posts!";
    console.error(err);
  }
}

// Create New Post
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: titleInput.value,
        body: bodyInput.value,
        userId: 1,
      }),
    });
    const newPost = await res.json();
    alert("Post Created!");
    titleInput.value = "";
    bodyInput.value = "";
    getAllPosts();
    console.log("Created Post:", newPost);
  } catch (err) {
    console.error("Error creating post:", err);
  }
});

// Update Post (just for demo, changes only on API response, not real DB)
async function editPost(id) {
  const newTitle = prompt("Enter new title:");
  const newBody = prompt("Enter new body:");
  if (!newTitle || !newBody) return;

  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, title: newTitle, body: newBody, userId: 1 }),
    });
    const updatedPost = await res.json();
    alert("Post Updated!");
    getAllPosts();
    console.log("Updated Post:", updatedPost);
  } catch (err) {
    console.error("Error updating post:", err);
  }
}

// Delete Post
async function deletePost(id) {
  try {
    const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    if (res.ok) {
      alert(`Post ${id} deleted!`);
      getAllPosts();
    }
  } catch (err) {
    console.error("Error deleting post:", err);
  }
}

// Initial Load
getAllPosts();
