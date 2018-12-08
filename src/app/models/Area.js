module.exports = (sequelize, DataTypes) => {
  const Area = sequelize.define('Area', {
    description: DataTypes.STRING
  })

  return Area
}
