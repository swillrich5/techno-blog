const { Blogpost } = require('../models');

const blogpostdata = [
  {
    title: 'Why MVC is so important',
    content: 
        'MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic',
    creation_date: 'March 30, 2020',
    user_id: 1,
  },
  {
    title: 'Object Relational Mapping',
    content: 
        'I just learned about ORMs.  It\'s really simplified the way I create queries',
    creation_date: 'April 30, 2021',
    user_id: 1,
  },
  {
    title: 'Handlebars',
    content: 
        'Handlebars seems like a lot of work for a limited payoff',
    creation_date: 'March 30, 2018',
    user_id: 2,
  },
  {
    title: 'Why MVC is so important',
    content: 
        'MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic',
    creation_date: 'March 30, 2018',
    user_id: 2,
  },
  {
    title: 'Why MVC is so important',
    content: 
        'MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic',
    creation_date: 'March 30, 2018',
    user_id: 2,
  },
  {
    title: 'Why MVC is so important',
    content: 
        'MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic',
    creation_date: 'March 30, 2018',
    user_id: 2,
  },
  {
    title: 'Why MVC is so important',
    content: 
        'MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic',
    creation_date: 'March 30, 2018',
    user_id: 3,
  },
  {
    title: 'Why MVC is so important',
    content: 
        'MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic',
    creation_date: 'March 30, 2018',
    user_id: 3,
  },
  {
    title: 'Why MVC is so important',
    content: 
        'MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic',
    creation_date: 'March 30, 2018',
    user_id: 3,
  },
];

const seedBlogposts = () => Blogpost.bulkCreate(blogpostdata);

module.exports = seedBlogposts;
