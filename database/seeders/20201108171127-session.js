'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Session',
      [
        {
          start: '2020-11-08T16:10:44.769Z',
          end: '2020-11-08T16:40:08.654Z',
          sensor: 'data1',
        },
        {
          start: '2020-11-08T16:10:44.769Z',
          end: '2020-11-08T16:40:08.654Z',
          sensor: 'data2',
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Session', null, {});
  },
};
