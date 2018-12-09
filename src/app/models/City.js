module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define(
    'City',
    {
      name: DataTypes.STRING
    },
    {
      tableName: 'city'
    }
  )

  return City
}
