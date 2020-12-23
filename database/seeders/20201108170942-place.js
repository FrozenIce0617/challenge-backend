'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Place',
      [
        {
          keyword: 'London Bridge',
          address: 'LB Address',
        },
        {
          keyword: 'AccessNow',
          address: 'AN Address',
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Place', null, {});
  },
};
