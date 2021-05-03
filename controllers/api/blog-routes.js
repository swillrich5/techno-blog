const router = require('express').Router();
const { User, Blogpost, Comment } = require('../../models');
const withAuth = require('../../utils/auth');


// delete a blog post along with its comments
router.delete('/:id', withAuth, async (req, res) => {
    try {
      const blogpostData = await Blogpost.destroy({
        where: {
          id: req.params.id,
        //   user_id: req.session.userID,
        },
      });

      if (!blogpostData) {
        res.status(404).json({ message: 'No blog post found with this id!' });
        return;
      }
  
      res.status(200).json(blogpostData);
    } catch (err) {
      console.log(err);  
      res.status(500).json(err);
    }
  });


  // ------------------------------------------------------------------


  // update a blog post if the user is logged in
  router.put('/:id', withAuth, async (req, res) => {
    try {
      const updateBlogpost = await Blogpost.update(req.body, {
        where: {
            id: req.params.id,
          },
      });
  
      res.status(200).json(updateBlogpost);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
  });

  router.post('/', withAuth, async (req, res) => {
  try {
    const updateBlogpost = await Blogpost.create({
      title: req.body.title,
      creation_date: req.body.creation_date,
      content: req.body.content,
      user_id: req.session.userID,
    });

    res.status(200).json(updateBlogpost);
  } catch (err) {
      console.log(err);
      res.status(400).json(err);
  }
});


// ------------------------------------------------------------------


// Allow the user to post a comment if they're logged in
router.post('/postcomment', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      comment: req.body.comment,
      creation_date: req.body.creation_date,
      user_id: req.session.userID,
      blogpost_id: req.body.blogpost_id,
    });

    res.status(200).json(newComment);
    req.session.blogpost_id = req.body.blogpost_id;
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});




module.exports = router;