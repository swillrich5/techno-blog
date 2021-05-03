

const submitCommentHandler = async (event) => {
    event.preventDefault();
  
    var comment = document.querySelector("#comment-content").value;
    const blogpost_id = event.target.getAttribute('data-id');
    creation_date = new Date();

    alert("comment = " + comment + "\nblogpost_id = " + blogpost_id + "\ncreate_date = " + creation_date);
  
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