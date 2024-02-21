'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('rooms', [{
      roomName: 'Conference Room',
      costPerHour: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      roomName: 'Discussion Room',
      costPerHour: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      roomName: 'Event Space',
      costPerHour: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('rooms', null, {});
  }
};
