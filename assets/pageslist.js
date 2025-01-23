document.addEventListener('DOMContentLoaded', function() {
    // Array of blog files in /assets/blogs/
    const blogFiles = [
        { name: 'post1_23012025.html', title: 'Starting the site!' }
    ];

    // Sort blog files by date
    blogFiles.sort((a, b) => {
        const dateA = a.name.split('_')[1];
        const dateB = b.name.split('_')[1];
        return dateB.localeCompare(dateA); // Sort descending by date
    });

    // Get the blog list container
    const blogList = document.getElementById('blog-list');

    // Render the list of blog posts
    blogFiles.forEach(blog => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = `blogs/${blog.name}`;
        link.textContent = `${blog.title} (${blog.name.split('_')[1]})`;
        listItem.appendChild(link);
        blogList.appendChild(listItem);
    });
});
