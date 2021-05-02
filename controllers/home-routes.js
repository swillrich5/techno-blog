const router = require('express').Router();
const { Blogpost, Comment, User } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all galleries for homepage
router.get('/', async (req, res) => {
  try {
    const dbBlogpostData = await Blogpost.findAll({
      include: [
        {
          model: Comment,
          attributes: ['comment'],
        },
      ],
    });

    // console.log(dbBlogpostData);
    // res.status(200).json(dbBlogpostData);

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




// GET one gallery
// Use the custom middleware before allowing the user to access the gallery
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



// GET one painting
// Use the custom middleware before allowing the user to access the painting
router.get('/painting/:id', withAuth, async (req, res) => {
  try {
    const dbPaintingData = await Painting.findByPk(req.params.id);

    const painting = dbPaintingData.get({ plain: true });

    res.render('painting', { painting, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  console.log("am I here?")
  if (req.session.loggedIn) {
    res.redirect('/');

    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  console.log("am I here in signup?")
  if (req.session.loggedIn) {
    res.redirect('/');

    return;
  }

  res.render('signup');
});







// GET one gallery
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



  console.log(blogposts);

  res.render('dashboard', {
    blogposts,
  });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



// GET one gallery
// Use the custom middleware before allowing the user to access the gallery
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





module.exports = router;



