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

export async function getBlockUserByUsernameModel(username: string) {
  try {
    const ret = await BlockUser.findOne({ where: { username: username } });

    return ret;
  } catch (e) {
    return null;
  }
}

export async function updateBlockUserByIdModel(
  id: number,
  { username, isBlock }: { username?: string; isBlock?: number }
) {
  try {
    if (username) {
      await BlockUser.update(
        {
          username: username,
        },
        {
          where: {
            id: id,
          },
        }
      );
    }
    if (isBlock || isBlock === 0) {
      await BlockUser.update({ isBlocked: isBlock }, { where: { id: id } });
    }
    return true;
  } catch (e) {
    return false;
  }
}
