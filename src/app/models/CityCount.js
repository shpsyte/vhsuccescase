module.exports = (sequelize, DataTypes) => {
  const CityCount = sequelize.define(
    'CityCount',
    {
      name: {
        type: DataTypes.STRING,
        primaryKey: true
      },
      count: DataTypes.INTEGER
    },
    {
      timestamps: false,
      tableName: 'city_count'
    }
  )

  return CityCount
}
