require("dotenv/config");

const ssl =
  process.env.DB_SSL === "false"
    ? false
    : {
        require: true,
        rejectUnauthorized: false,
      };

const config = {
  username: process.env.DB_USER ?? "neondb_owner",
  password: process.env.DB_PASSWORD ?? "npg_7EGBesXQb4Fy",
  database: process.env.DB_NAME ?? "zapier_db",
  host:
    process.env.DB_HOST ??
    "ep-cool-mouse-a1fk4csi-pooler.ap-southeast-1.aws.neon.tech",
  dialect: "postgres",
  dialectOptions: ssl ? { ssl } : {},
};

module.exports = {
  development: config,
  test: config,
  production: config,
};
