document.addEventListener("DOMContentLoaded", function() {
    const loadMoreButton = document.getElementById("load-more");
    const blogPostsContainer = document.querySelector(".blog-posts");
    const maxPostsPerPage = 5;
    let currentPostIndex = 0;

    // Dummy data representing blog posts
    const blogPosts = [
        { title: "Post 1", content: "Content of post 1..." },
        { title: "Post 2", content: "Content of post 2..." },
        { title: "Post 3", content: "Content of post 3..." },
        { title: "Post 4", content: "Content of post 4..." },
        { title: "Post 5", content: "Content of post 5..." },
        { title: "Post 6", content: "Content of post 6..." },
        // Add more posts as needed
    ];

    // Function to render a single blog post
    function renderPost(post) {
        const postElement = document.createElement("article");
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <a href="#">Read more</a>
        `;
        blogPostsContainer.appendChild(postElement);
    }

    // Function to load more posts
    function loadMorePosts() {
        const postsToShow = blogPosts.slice(currentPostIndex, currentPostIndex + maxPostsPerPage);
        postsToShow.forEach(post => renderPost(post));
        currentPostIndex += maxPostsPerPage;
        if (currentPostIndex >= blogPosts.length) {
            loadMoreButton.style.display = "none";
        }
    }

    // Event listener for the load more button
    loadMoreButton.addEventListener("click", loadMorePosts);

    // Initial loading of posts
    loadMorePosts();
});
