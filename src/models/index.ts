import { Sequelize } from "sequelize";
import { config } from "dotenv";
import { configuration } from "../services/db.service";

config();
let Database: Sequelize;

if (process.env.ENV === "DEV") {
  Database = new Sequelize(configuration);
} else if (process.env.ENV === "PROD") {
  if (process.env.DATABASE_URL != undefined) {
    Database = new Sequelize(String(process.env.DATABASE_URL), {
      dialect: "postgres",
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
    });
  }
}

export { Database };
