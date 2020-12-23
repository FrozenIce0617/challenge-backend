require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DEV_DATABASE_USER,
    password: process.env.DEV_DATABASE_PASSWORD,
    database: process.env.DEV_DATABASE,
    host: 'localhost',
    dialect: 'postgres',
  },
  test: {
    username: process.env.TEST_DATABASE_USER,
    password: process.env.TEST_DATABASE_PASSWORD,
    database: process.env.TEST_DATABASE,
    host: 'localhost',
    dialect: 'postgres',
  },
  production: {
    username: 'database_test',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
};
