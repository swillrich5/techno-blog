const { User } = require('../models');

const userdata = [
    {
      "username": "Chico",
      "email": "chico@hotmail.com",
      "password": "password12345"
    },
    {
      "username": "Brown",
      "email": "brown@gmail.com",
      "password": "password12345"
    },
    {
      "username": "Leonard",
      "email": "leonard@aol.com",
      "password": "password12345"
    }
  ];
  
const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;