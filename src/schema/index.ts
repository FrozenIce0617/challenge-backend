import * as Sequelize from 'sequelize';

import PlaceFactory from './Place';
import SessionFactory from './Session';
import { FixmeType } from '../types';
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../../config/database.js')[env];

const _Sequelize: FixmeType = Sequelize;

export const sequelize = new _Sequelize(config.database, config.username, config.password, config);

const db = {
  sequelize,
  Sequelize,
  Place: PlaceFactory(sequelize),
  Session: SessionFactory(sequelize),
};

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize.sync();

export default db;
