'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('case', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      cityId: {
        type: Sequelize.INTEGER,
        references: { model: 'city', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false
      },
      areaId: {
        type: Sequelize.INTEGER,
        references: { model: 'area', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false
      },
      skillId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'skill', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      year: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allNull: false,
        type: Sequelize.DATE
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('case')
  }
}
