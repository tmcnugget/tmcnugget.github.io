# How to add a new log:

 Create a new HTML file in the ```/logs/``` directory:

 - Use the template:

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Post name - tmcnugget.github.io</title>
    <link rel="stylesheet" href="/style.css">
</head>
<body>
    <header>
        <h1>Post Title</h1>
        <nav>
            <ul>
                <li><a href="/index">Home</a></li>
                <li><a href="/logs">All Logs</a></li>
                <li><a href="/projects">All Projects</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <article>
            <h2>Subtitle or Intro</h2>
            <p>
                This is where the body of your post begins. You can write about anything
                here, share thoughts, news, ideas, or experiences. Format your content as
                needed: <strong>bold</strong>, <em>italic</em>, lists, and more.
            </p>
        </article>
    </main>
    <main>
        <article>
            <section>
                <h3>Section Title</h3>
                <p>Content for this section goes here. You can split your post into multiple sections to make it more readable.</p>
            </section>
        </article>
    </main>
    <main>
        <article>
            <section>
                <h3>Another Section</h3>
                <p>Continue writing the rest of the post in a similar format, adding sections as necessary.</p>
            </section>
        </article>
    </main>
    <main>
        <article>
            <p>That's the end of the post! See you next time!</p>
        </article>
    </main>
</body>
</html>
```

 - Name it ```ddmmyyy```:
     - Example: ```24011984``` 24 January, 1984
     - Set it to the date you publish the log

 - Open and modify [logs.json](/assets/logs/logs.json)
 - Add a line, indented 4 spaces: ```"ddmmyyyy.html",``` the ```ddmmyyyy``` being the same date as the one you added when you named the html template (earlier in these instructions)
