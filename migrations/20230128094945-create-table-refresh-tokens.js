'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, sequelize) {
   
      await queryInterface.createTable('refresh_tokens', { 
        id: { 
          type: sequelize.INTEGER,
          autoIncrement: true,
          primaryKey:true,
          allowNull:false
        },
        token: {
          type: sequelize.TEXT,
          allowNull: false
        },
        user_id : {
          type: sequelize.INTEGER,
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
      await queryInterface.addConstraint('refresh_tokens', {
        type: 'foreign key',
        fields: ['user_id'],
        name: 'REFRESH_TOKEN_USER_ID',
        references: {
          table: 'users',
          field: 'id'
        }
      })
    
  },

  async down (queryInterface, Sequelize) {
  
    await queryInterface.dropTable('users');
    
  }
};
