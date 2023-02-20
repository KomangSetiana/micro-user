"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        name: "Bima",
        profession: "Programer",
        role: "admin",
        email: "komangsetian@gmail.com",
        password: await bcrypt.hash("rahasia123", 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Setiana",
        profession: "Web-dep",
        role: "student",
        email: "komangsetian1@gmail.com",
        password: await bcrypt.hash("rahasia1234", 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
      await queryInterface.bulkDelete('users', null, {});
     
  },
};
