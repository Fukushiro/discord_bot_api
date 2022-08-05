require("dotenv").config();

module.exports = {
  development: {
    dialect: "sqlite",
    storage: "dev.sqlite3",
  },
  production: {
    dialect: "postgres",
    // URL: process.env.DATABASE_URL,
    use_env_variable: "DATABASE_URL",
    // protocol: process.env.DIALECT,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
