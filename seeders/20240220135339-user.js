'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [{
      name: 'Troll Warlord',
      email: 'jarakal@dota.com',
      password: '$2b$10$1YWSs6Vt1Uudt8EcoFS9Nugv3Bwz74KPkuq81hT5xBr16hnFbyWRC', // value = password
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
