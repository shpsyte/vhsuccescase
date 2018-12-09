module.exports = (sequelize, DataTypes) => {
  const SkillCityCount = sequelize.define(
    'SkillCityCount',
    {
      city: {
        type: DataTypes.STRING,
        primaryKey: true
      },
      skill: DataTypes.STRING,
      count: DataTypes.INTEGER
    },
    {
      timestamps: false,
      tableName: 'skill_city_count'
    }
  )

  return SkillCityCount
}
