module.exports = (sequelize, DataTypes) => {
  const Skill = sequelize.define(
    'Skill',
    {
      name: DataTypes.STRING
    },
    {
      tableName: 'skill'
    }
  )

  return Skill
}
