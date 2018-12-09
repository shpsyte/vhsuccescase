module.exports = (sequelize, DataTypes) => {
  const Area = sequelize.define(
    'Area',
    {
      name: DataTypes.STRING
    },
    {
      tableName: 'area'
    }
  )

  return Area
}
