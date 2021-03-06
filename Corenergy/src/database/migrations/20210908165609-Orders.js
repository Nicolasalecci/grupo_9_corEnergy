'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("orders",{
      id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        unique:true,
        allowNull:false
      },
      cartId:{
        type:Sequelize.INTEGER,
        references: {
          model:"carts",
          key:"id"
        }
      },
      addressId:{
        type:Sequelize.INTEGER,
        references: {
          model:"addresses",
          key:"id"
        }
      },
      cardId:{
        type:Sequelize.INTEGER,
        references: {
          model:"cards",
          key:"id"
        }
      },
    });
},
down: async (queryInterface, Sequelize) => {
  await queryInterface.dropTable('orders')
 
}
};
