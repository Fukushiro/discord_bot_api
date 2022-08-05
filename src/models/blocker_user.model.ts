import { Database } from ".";
import { DataTypes as Sequelize } from "sequelize";
import { encript } from "../services/user_example.service";
import bcrypt from "bcrypt";
export const BlockUser = Database.define(
  "block_user",
  {
    username: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    isBlocked: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  { freezeTableName: true }
);
