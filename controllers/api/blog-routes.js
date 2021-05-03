const router = require('express').Router();
const { User, Blogpost, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.delete('/:id', withAuth, async (req, res) => {
    try {
      const blogpostData = await Blogpost.destroy({
        where: {
          id: req.params.id,
        //   user_id: req.session.userID,
        },
      });

      console.log(blogpostData);
  
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



  router.put('/:id', withAuth, async (req, res) => {
      console.log("This is req.body");
      console.log(req.body);
    try {
      const updateBlogpost = await Blogpost.update(req.body, {
        where: {
            id: req.params.id,
          //   user_id: req.session.userID,
          },
      });
  
      res.status(200).json(updateBlogpost);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
  });



  router.post('/postcomment', withAuth, async (req, res) => {
    try {
      console.log("req.session.userID = " + req.session.userID);
      const newComment = await Comment.create({
        comment: req.body.comment,
        creation_date: req.body.creation_date,
        user_id: req.session.userID,
        blogpost_id: req.body.blogpost_id,
      });
  
      res.status(200).json(newComment);
      console.log('newComment = ' + newComment);
      req.session.blogpost_id = req.body.blogpost_id;
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  });




module.exports = router;