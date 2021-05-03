const router = require('express').Router();
const { Blogpost, Comment, User } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

const sequelize = require('../config/connection');

// GET all blog posts for the homepage
router.get('/', async (req, res) => {
  try {
    const dbBlogpostData = await Blogpost.findAll({
      include: [
        {
          model: Comment,
          attributes: ['comment'],
        },
        {
          model: User,
        }
      ],
    });

    const blogposts = dbBlogpostData.map((blogpost) =>
      blogpost.get({ plain: true })
    );

    console.log(blogposts);

    res.render('homepage', {
      blogposts,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// ------------------------------------------------------------------


// GET one post
// Use the custom middleware to verify login status
// before allowing the user to access the post
router.get('/blogpost/:id', withAuth, async (req, res) => {
  try {
    const dbBlogpostData = await Blogpost.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          attributes: [
            'id',
            'comment',
            'creation_date',
            'owner_id',
          ],
          model: User,
          attributes: [
            'id',
            'username',
          ]
        },
      ],
    });

    const blogpost = dbBlogpostData.get({ plain: true });
    res.render('blogpost', { blogpost, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// ------------------------------------------------------------------


// give the user the opportunity to log in if they're already 
// logged in, take them back to the homepage
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');

    return;
  }
  res.render('login');
});


// ------------------------------------------------------------------


// give the user the opportunity to create a login if they haven't
// already created an account
router.get('/signup', (req, res) => {
  console.log("am I here in signup?");
  if (req.session.loggedIn) {
    res.redirect('/');

    return;
  }

  res.render('signup');
});


// ------------------------------------------------------------------


// if logged in let the user pull up a blog post that they've clicked on
// Use the custom middleware before allowing the user to access the gallery
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const dbBlogpostData = await Blogpost.findAll({
      where: {
        '$User.username$' : req.session.username
      },
      include: [
        {
          model: User,
          required: false
        },
        {
          model: Comment,
          required: false
        }
      ],
  });

  const blogposts = dbBlogpostData.map((blogpost) =>
      blogpost.get({ plain: true })
  );

  res.render('dashboard', {
    blogposts,
  });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// ------------------------------------------------------------------


// get a blog post for editing, using withAuth to make sure the user
// is logged in
router.get('/dashboard/:id', withAuth, async (req, res) => {
  try {
    const dbBlogpostData = await Blogpost.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          attributes: [
            'id',
            'comment',
            'creation_date',
            'owner_id',
          ],
          model: User,
          attributes: [
            'id',
            'username',
          ]
        },
      ],
    });

    const blogpost = dbBlogpostData.get({ plain: true });

    res.render('editPost', { blogpost, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// ------------------------------------------------------------------


// render a page foro the user to create a new blog post
// added withAuth at 3pm on Monday - take out if problems
router.get('/newblogpost',  withAuth, (req, res) => {
  res.render('newblogpost');
});

// ------------------------------------------------------------------


// get one blog post and set up for commenting, using withAuth to make
// sure the user is logged in
router.get('/viewpostandcomment/:id', withAuth, async (req, res) => {
  try {
    const dbCommentData = await Comment.findAll({
      where: {
        '$Blogpost.id$' : req.params.id
      },
      include: [
        {
          model: User,
          required: false
        },
        {
          model: Blogpost,
          required: false,
          where: {
            id: req.params.id
          }
        }
      ],
    });

    const comments = dbCommentData.map((comment) =>
      comment.get({ plain: true })
    );

    res.render('displaypostandcomments', { comments, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



module.exports = router;



