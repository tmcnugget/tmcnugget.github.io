async function loadBlogPosts() {
    const blogList = document.getElementById('blog-list');

    try {
        const response = await fetch('/posts/posts.json'); // Adjust the path as necessary
        if (!response.ok) throw new Error('Failed to fetch posts list');
        const posts = await response.json();

        // Sort posts in descending order (newest at the top)
        posts.sort((a, b) => b.localeCompare(a));

        // Generate the list items
        posts.forEach(post => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = `/posts/${post}`;
            link.textContent = post.replace('.html', ''); // Show the date as the title
            listItem.appendChild(link);
            blogList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error loading blog posts:', error);
        blogList.innerHTML = '<li>Failed to load posts. Please try again later.</li>';
    }
}

// Load posts after the DOM is ready
document.addEventListener('DOMContentLoaded', loadBlogPosts);
