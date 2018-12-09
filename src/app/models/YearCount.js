module.exports = (sequelize, DataTypes) => {
  const YearCount = sequelize.define(
    'YearCount',
    {
      year: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      count: DataTypes.INTEGER
    },
    {
      timestamps: false,
      tableName: 'year_count'
    }
  )

  return YearCount
}
