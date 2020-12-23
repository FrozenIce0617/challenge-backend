import * as Sequelize from 'sequelize';

import { Place, SequelizeAttributes, FixmeType } from '../types';

export default (sequelize: Sequelize.Sequelize) => {
  const attributes: SequelizeAttributes<Place> = {
    id: {
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    keyword: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  };

  type ModalType = typeof Sequelize.Model & {
    new (values?: object, options?: Sequelize.BuildOptions): Place;
  };

  const Place: FixmeType = <ModalType>sequelize.define('Place', attributes);

  return Place;
};
