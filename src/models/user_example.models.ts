import { Database } from ".";
import { DataTypes as Sequelize } from "sequelize";
import { encript } from "../services/user_example.service";
import bcrypt from "bcrypt";
export const UserExampleModel = Database.define(
  "user_example",
  {
    username: { type: Sequelize.STRING, allowNull: false },
    password: { type: Sequelize.STRING(500), allowNull: false },
  },
  { freezeTableName: true }
);

export async function createUserExampleModel({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  try {
    const hashedPass = await encript(password);
    const ret = await UserExampleModel.create({
      username: username,
      password: hashedPass,
    });

    return ret;
  } catch (e) {
    console.log("catch createUserModel", e);

    return null;
  }
}
