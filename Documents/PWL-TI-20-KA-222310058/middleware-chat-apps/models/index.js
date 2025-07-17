'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
require('dotenv').config();

const db = {};
const sequelize = new Sequelize(
  process.env.EXPRESS_DB_NAME,
  process.env.EXPRESS_DB_USERNAME,
  process.env.EXPRESS_DB_PASSWORD,
  {
    host: process.env.EXPRESS_DB_HOST,
    dialect: 'mysql',
    port: process.env.EXPRESS_DB_PORT
  }
);

fs
  .readdirSync(__dirname)
  .filter(file => file !== basename && file.endsWith('.js'))
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
