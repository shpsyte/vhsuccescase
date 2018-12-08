class Dashboard {
  async index (req, res) {
    return res.render('dashboard')
  }
}

module.exports = new Dashboard()
