
// grab the id for the blog post that the user wants to delete from 
// the dashboard and send it to the DELETE route for deletion from 
// the database
const deleteBlogPostHandler = async (event) => {
    event.preventDefault();

    const id = event.target.getAttribute('data-id');
  
    const response = await fetch(`/api/blogs/${id}`, {
        method: 'DELETE',
    });

    if (response.ok) {
    document.location.replace('/dashboard');
    } else {
    alert('Failed to delete.');
    console.log(response);
    }
}

// ------------------------------------------------------------------


// send the updated blog post data to the PUT route to store the update
// in the database
const updateBlogPostHandler = async (event) => {
    event.preventDefault();

    var title = document.querySelector("#blogpost-title").value;
    var content = document.querySelector("#blogpost-content").value;
    const id = event.target.getAttribute('data-id');
    creation_date = new Date();
  
    if (id && title && content) {
        const response = await fetch(`/api/blogs/${id}`, {
          method: 'PUT',
          body: JSON.stringify({ id, title, content, creation_date }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (response.ok) {
          document.location.replace('/dashboard');
        } else {
          alert('Failed to update blog post');
        }
    }
};



// listeners for the delete and update blog post buttons  
document
    .querySelector('#delete-button')
    .addEventListener('click', deleteBlogPostHandler);

document
  .querySelector('#update-button')
  .addEventListener('click', updateBlogPostHandler);