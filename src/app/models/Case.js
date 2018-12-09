module.exports = (sequelize, DataTypes) => {
  const Case = sequelize.define(
    'Case',
    {
      name: DataTypes.STRING,
      cityId: DataTypes.INTEGER,
      areaId: DataTypes.INTEGER,
      skillId: DataTypes.INTEGER,
      year: DataTypes.INTEGER
    },
    {
      tableName: 'case'
    }
  )

  // faz a ligação entre as tabelas
  Case.associate = models => {
    Case.belongsTo(models.City, { as: 'city', foreignKey: 'cityId' })
    Case.belongsTo(models.Area, { as: 'area', foreignKey: 'areaId' })
    Case.belongsTo(models.Skill, { as: 'skill', foreignKey: 'skillId' })
  }

  return Case
}
