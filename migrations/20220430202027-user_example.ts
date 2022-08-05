"use strict";

import { DataTypes as Sequelize, QueryInterface } from "sequelize";

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    queryInterface.createTable("user_example", {
      // need to add
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      //
      username: { type: Sequelize.STRING, allowNull: false },
      password: { type: Sequelize.STRING(500), allowNull: false },
      //need to add
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      //
    });
  },

  down: async (queryInterface: QueryInterface) => {
    queryInterface.dropTable("user_example");
  },
};
