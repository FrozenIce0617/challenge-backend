import * as Sequelize from 'sequelize';

import { Session, SequelizeAttributes, FixmeType } from '../types';

export default (sequelize: Sequelize.Sequelize) => {
  const attributes: SequelizeAttributes<Session> = {
    id: {
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    start: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    end: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    sensor: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  };

  type ModalType = typeof Sequelize.Model & {
    new (values?: object, options?: Sequelize.BuildOptions): Session;
  };

  const Session: FixmeType = <ModalType>sequelize.define('Session', attributes);

  return Session;
};
