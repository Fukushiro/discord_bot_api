"use strict";
import { DataTypes as Sequelize, QueryInterface } from "sequelize";
module.exports = {
  up: async (queryInterface: QueryInterface) => {
    queryInterface.createTable("block_user", {
      // need to add
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      //

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
      username: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      isBlocked: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    });
  },

  down: async (queryInterface: QueryInterface) => {
    queryInterface.dropTable("block_user");
  },
};
