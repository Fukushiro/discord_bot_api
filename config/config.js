require("dotenv").config();

module.exports = {
  development: {
    dialect: "sqlite",
    storage: "dev.sqlite3",
  },
  production: {
    dialect: "postgres",
    storage: process.env.DATABASE_URL,
  },
};
