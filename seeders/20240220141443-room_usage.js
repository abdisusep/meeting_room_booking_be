'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('room_usages', [{
      clientId: 2,
      roomId: 2,
      startTime: '10:00',
      endTime: '11:00',
      bookingDate: '2021-04-13',
      quotaUsed: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('room_usages', null, {});
  }
};
