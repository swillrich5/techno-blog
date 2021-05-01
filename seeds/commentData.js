const { Comment } = require('../models');

const commentdata = [
    {
        comment: 
                'Yes, but can it scale?',
        creation_date: 'March 31, 2020',
        user_id: 1,
        post_id: 1,
    },
    {
         comment: 
                'Yes, it\'s good to have a standard way to implement an application',
        creation_date: 'March 31, 2020',
        user_id: 2,
        post_id: 1,
    },
    {
        comment: 
                'Comment on post 2 userID 2',
        creation_date: 'March 31, 2020',
        user_id: 1,
        post_id: 1,
    },
    {
        comment: 
                'Comment Comment Comment',
        creation_date: 'March 31, 2020',
        user_id: 3,
        post_id: 4,
    },
    {
        comment: 
                'Comment Comment Comment',
        creation_date: 'March 31, 2020',
        user_id: 3,
        post_id: 6,
    },
    {
        comment: 
                'Comment Comment Comment',
        creation_date: 'March 31, 2020',
        user_id: 1,
        post_id: 4,
    },
    {
        comment: 
                'Comment Comment Comment',
        creation_date: 'March 31, 2020',
        user_id: 2,
        post_id: 5,
    },
    {
        comment: 
                'Comment Comment Comment',
        creation_date: 'March 31, 2020',
        user_id: 1,
        post_id: 6, 
    },
    {
        comment: 
                'Comment Comment Comment',
        creation_date: 'March 31, 2020',
        user_id: 2,
        post_id: 7,
    },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
