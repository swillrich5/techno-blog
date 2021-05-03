const { Comment } = require('../models');

const commentdata = [
    {
        comment: 
                'Yes, but can it scale?',
        creation_date: 'March 31, 2020',
        user_id: 1,
        blogpost_id: 1,
    },
    {
        comment: 
                'Yes, it\'s good to have a standard way to implement an application',
        creation_date: 'March 31, 2020',
        user_id: 2,
        blogpost_id: 1,
    },
    {
        comment: 
                'Comment on post 2 userID 2',
        creation_date: 'March 31, 2020',
        user_id: 1,
        blogpost_id: 1,
    },
    {
        comment: 
                'How does it compare to Google?',
        creation_date: 'March 31, 2020',
        user_id: 3,
        blogpost_id: 4,
    },
    {
        comment: 
                'SQL all the way, bro!',
        creation_date: 'March 31, 2020',
        user_id: 3,
        blogpost_id: 6,
    },
    {
        comment: 
                'It\'s gotta be MongoDB and NoSQL!',
        creation_date: 'March 31, 2020',
        user_id: 1,
        blogpost_id: 6,
    },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
