const express = require('express')
const routes = express.Router()
const UserController = require('./app/controllers/UserController')
const SessionController = require('./app/controllers/SessionController')
const MiddlewareFlash = require('./app/middleware/default')
const MiddlewareAuth = require('./app/middleware/auth')
const MiddlewareAddAuth = require('./app/middleware/authDash')
const Dashboard = require('./app/controllers/DashboardController')
const CaseController = require('./app/controllers/CaseController')
const ChartController = require('./app/controllers/ChartController')

routes.use(MiddlewareFlash)
routes.use('/', MiddlewareAddAuth)

routes.get('/', MiddlewareAddAuth, Dashboard.index)

// routes.get('/signup', MiddlewareAuth, UserController.create)
routes.get('/signup', UserController.create)
routes.post('/signup', UserController.store)

routes.get('/signin', SessionController.signin)
routes.post('/signin', SessionController.store)

routes.get('/logout', SessionController.destroy)

routes.get('/create', MiddlewareAuth, CaseController.index)
routes.post('/create', MiddlewareAuth, CaseController.store)

routes.get('/list', CaseController.list)

// chart
routes.get('/skillcount', ChartController.skillCount)
routes.get('/citycount', ChartController.cityCount)
routes.get('/yearcount', ChartController.yearCount)
routes.get('/skillbycity', ChartController.skillCityCount)

module.exports = routes
