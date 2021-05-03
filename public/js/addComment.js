
// Take the data from the add comment form and send it to the
// POST route to store it in the database
const submitCommentHandler = async (event) => {
    event.preventDefault();
  
    var comment = document.querySelector("#comment-content").value;
    const blogpost_id = event.target.getAttribute('data-id');
    creation_date = new Date();
  
    if (comment && blogpost_id && creation_date) {
      const response = await fetch('/api/blogs/postcomment', {
        method: 'POST',
        body: JSON.stringify({ comment, creation_date, blogpost_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace(`/viewpostandcomment/${blogpost_id}`);
    
      } else {
        alert('Failed to create new blog post');
      }
    }
  };

   
document
.querySelector('#submit-button')
.addEventListener('click', submitCommentHandler);