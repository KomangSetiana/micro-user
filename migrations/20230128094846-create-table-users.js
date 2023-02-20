'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, sequelize) {
    await queryInterface.createTable('users', { 
      id: { 
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey:true,
        allowNull:false
      },
      name: {
        type: sequelize.STRING,
        allowNull: false
      },
      profession: {
        type: sequelize.STRING,
        allowNull: true
      },
      avatar: {
        type: sequelize.STRING,
        allowNull:true
      },
      role : {
        type: sequelize.ENUM,
        values: ['admin','student'],
        allowNull: false
        
      },
      email: {
        type: sequelize.STRING,
        allowNull:false
      },
      password : {
        type: sequelize.STRING,
        allowNull: false
      },
      created_at : {
        type: sequelize.DATE,
        allowNull:false
      },
      updated_at: {
        type: sequelize.DATE,
        allowNull: false
      }
    });
    await queryInterface.addConstraint('users', {
      type: 'unique',
      fields: ['email'],
      name: 'UNIQUE_USERS_EMAIL'
    })
  },

  async down (queryInterface, sequelize) {
    await queryInterface.dropTable('users');
  }
};
