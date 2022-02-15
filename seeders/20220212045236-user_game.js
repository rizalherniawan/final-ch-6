'use strict';
const fs = require('fs');

module.exports = {
  up (queryInterface, Sequelize) {
    return new Promise((resolve,reject) => {
      fs.readFile('./data/user_game.json', 'utf-8',
      (error,data) => {
        if (error) reject(error);
        else {
          data = JSON.parse(data);
          resolve(data)
        }
      });
    }).then((data) => {
      data.forEach((datum) => {
        datum.createdAt = new Date();
        datum.updatedAt = new Date();
      });
      return queryInterface.bulkInsert('user_games', data,
      {});
    })
  },

  down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('user_games', null, {})
  }
};

