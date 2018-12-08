const express = require('express')
const routes = express.Router()
const UserController = require('./app/controllers/UserController')
const SessionController = require('./app/controllers/SessionController')
const MiddlewareFlash = require('./app/middleware/default')
const MiddlewareAuth = require('./app/middleware/auth')
const Dashboard = require('./app/controllers/Dashboard')

routes.use(MiddlewareFlash)
routes.use('/', MiddlewareAuth)

routes.get('/', Dashboard.index)

routes.get('/signup', UserController.create)
routes.post('/signup', UserController.store)

routes.get('/signin', SessionController.signin)
routes.post('/signin', SessionController.store)

routes.get('/logout', SessionController.destroy)

module.exports = routes
