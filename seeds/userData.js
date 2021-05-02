const { User } = require('../models');

const userdata = [
    {
      "username": "Chico",
      "password": "password12345"
    },
    {
      "username": "Brown",
      "password": "password12345"
    },
    {
      "username": "Leonard",
      "password": "password12345"
    }
  ];
  
const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;