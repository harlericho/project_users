const Sequelize = require("sequelize");
const modelUser = require("../models/user");
const sequelize = new Sequelize("db_apiusers", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});
const User = modelUser(sequelize, Sequelize);
sequelize.sync({ force: false }).then(() => {
  console.log("User table syncronized");
});

module.exports = {
  User,
};
