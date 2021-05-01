const sequelize = require('../config/connection');
const seedUsers = require('./userData');
const seedBlogposts = require('./blogpostData');
const seedComments = require('./commentData');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedUsers();

    await seedBlogposts();

    await seedComments();
    
    process.exit(0);
};

seedAll();