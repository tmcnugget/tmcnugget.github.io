document.addEventListener('DOMContentLoaded', function() {
    // Array of blog files in /assets/blogs/
    const blogFiles = [
        { name: '23012025.html', title: 'Starting the site!' }
    ];

    // Sort blog files by date (ddmmyyyy format)
    blogFiles.sort((a, b) => {
        return b.name.localeCompare(a.name); // Sort descending by date
    });

    // Get the blog list container
    const blogList = document.getElementById('blog-list');

    // Render the list of blog posts
    blogFiles.forEach(blog => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = `blogs/${blog.name}`;
        link.textContent = `${blog.title} (${blog.name.slice(0, 8)})`; // Format as ddmmyyyy
        listItem.appendChild(link);
        blogList.appendChild(listItem);
    });
});
