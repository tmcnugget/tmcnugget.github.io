async function loadBlogPosts() {
    const blogList = document.getElementById('blog-list');

    try {
        const response = await fetch('logs.json'); // Adjust the path as necessary
        if (!response.ok) throw new Error('Failed to fetch posts list');
        const posts = await response.json();

        // Sort posts in descending order (newest at the top)
        posts.sort((a, b) => b.localeCompare(a));

        // Generate the list items
        posts.forEach(post => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = `/logs/${post}`;
            link.textContent = post.replace('.html', ''); // Show the date as the title
            listItem.appendChild(link);
            blogList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error loading logs:', error);
        blogList.innerHTML = '<li>Failed to load logs. Please try again later.</li>';
    }
}

// Load posts after the DOM is ready
document.addEventListener('DOMContentLoaded', loadBlogPosts);
