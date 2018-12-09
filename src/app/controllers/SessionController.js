const { User } = require('../models')

class SessionController {
  async signin (req, res) {
    return res.render('auth/signin')
  }

  async store (req, res) {
    const { email, password } = req.body

    const user = await User.findOne({ where: { email } })

    if (!user || !(await user.checkPassword(password))) {
      req.flash('error', 'User/Password is not valid')
      return res.redirect('/signin')
    }

    req.session.user = user

    return res.redirect('/')
  }

  destroy (req, res) {
    // destroy a session e limpa os cookies

    req.session.destroy(() => {
      res.clearCookie('root')
      return res.redirect('/')
    })
  }
}

module.exports = new SessionController()
