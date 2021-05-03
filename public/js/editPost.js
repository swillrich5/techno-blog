// var titleEl = document.querySelector("#blogpost-title");
// var contentEl = document.querySelector("#blogpost-content");

const deleteBlogPostHandler = async (event) => {
    event.preventDefault();

    const id = event.target.getAttribute('data-id');
    alert("id = " + id);
  
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

const updateBlogPostHandler = async (event) => {
    event.preventDefault();

    var title = document.querySelector("#blogpost-title").value;
    alert("title = " + title);
    var content = document.querySelector("#blogpost-content").value;
    const id = event.target.getAttribute('data-id');
    creation_date = new Date();
    alert("id = " + id);
  
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
          alert('Failed to create project');
        }
    }
};



  
document
    .querySelector('#delete-button')
    .addEventListener('click', deleteBlogPostHandler);

document
  .querySelector('#update-button')
  .addEventListener('click', updateBlogPostHandler);