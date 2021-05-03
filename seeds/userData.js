const { User } = require('../models');

const userdata = [
    {
      "username": "Chico",
      "password": "password12345"
    },
    {
      "username": "Sheldon",
      "password": "password12345"
    },
    {
      "username": "Leonard",
      "password": "password12345"
    }
  ];
  
const seedUsers = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUsers;