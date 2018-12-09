const {
  SkillCount,
  CityCount,
  YearCount,
  SkillCityCount
} = require('../models')

class ChartController {
  async skillCount (req, res) {
    const skillCounts = await SkillCount.findAll()

    return res.json(skillCounts)
  }

  async cityCount (req, res) {
    const cityCounts = await CityCount.findAll()

    return res.json(cityCounts)
  }

  async yearCount (req, res) {
    const yearCounts = await YearCount.findAll({
      order: [['year', 'ASC']]
    })

    return res.json(yearCounts)
  }

  async skillCityCount (req, res) {
    const skillCityCounts = await SkillCityCount.findAll()

    return res.json(skillCityCounts)
  }
}

module.exports = new ChartController()
