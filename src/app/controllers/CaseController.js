const { City, Skill, Area, Case } = require('../models')
class CaseController {
  async index (req, res, next) {
    const cities = await City.findAll()
    const skills = await Skill.findAll()
    const areas = await Area.findAll()

    return res.render('case/store.njk', { cities, skills, areas })
  }

  async store (req, res, next) {
    await Case.create(req.body)
    req.flash('success', 'Case add!')

    return res.redirect('/')
  }

  async list (req, res, next) {
    const cases = await Case.findAll({
      include: { all: true }
    })

    return res.render('case/list', { cases })
  }
}

module.exports = new CaseController()
