
const newBlogPostHandler = async (event) => {
  event.preventDefault();

  var title = document.querySelector("#blogpost-title").value;
  alert("title = " + title);
  var content = document.querySelector("#blogpost-content").value;

  creation_date = new Date();

  if (title && content) {
    const response = await fetch('/api/blogs', {
      method: 'POST',
      body: JSON.stringify({ title, content, creation_date }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create new blog post');
    }
  }
};



  
document
    .querySelector('#newpost-button')
    .addEventListener('click', newBlogPostHandler);
