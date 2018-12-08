module.exports = (req, res, next) => {
  res.locals.flashSuccess = req.flash('sucess')
  res.locals.flashError = req.flash('error')

  return next()
}
