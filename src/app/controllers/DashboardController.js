const { SkillCityCount } = require('../models')
class DashboardController {
  async index (req, res) {
    const skillCityCounts = await SkillCityCount.findAll({
      order: [['count', 'DESC']]
    })

    return res.render('dashboard', { skillCityCounts })
  }
}

module.exports = new DashboardController()
