module.exports = (sequelize, DataTypes) => {
  const SkillCount = sequelize.define(
    'SkillCount',
    {
      name: {
        type: DataTypes.STRING,
        primaryKey: true
      },
      count: DataTypes.INTEGER
    },
    {
      timestamps: false,
      tableName: 'skill_count'
    }
  )

  return SkillCount
}
