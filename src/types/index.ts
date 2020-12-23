import { DataTypeAbstract, ModelAttributeColumnOptions } from 'sequelize';

export type FixmeType = any;

export type Place = {
  id?: FixmeType;
  keyword: string;
  address: string;
  createdAt?: Date;
  updatedAt?: Date;
};

type SequelizeAttribute = string | DataTypeAbstract | ModelAttributeColumnOptions;

export type SequelizeAttributes<T extends { [key: string]: FixmeType }> = {
  [P in keyof T]: SequelizeAttribute;
};

export type Session = {
  id?: FixmeType;
  start: Date;
  end: Date;
  sensor: string;
  createdAt?: Date;
  updatedAt?: Date;
};
