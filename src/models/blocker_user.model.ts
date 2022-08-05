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

export async function createBlockUserModel(
  username: string,
  isBlocked: number
) {
  try {
    const ret = await BlockUser.create({
      username: username,
      isBlocked: isBlocked,
    });
    return ret;
  } catch (e) {
    return null;
  }
}

export async function getAllBlockUserModel() {
  try {
    const ret = await BlockUser.findAll();

    return ret;
  } catch (e) {
    return null;
  }
}
