const express = require('express')
const nunjucks = require('nunjucks')
const flash = require('connect-flash')
const path = require('path')
const routes = require('./routes')
const session = require('express-session')
const FileStore = require('session-file-store')(session)

class Server {
  constructor () {
    this.express = express()
    this.isDev = process.env.NODE_ENV !== 'production'
    this.midlleware()
    this.view()
    this.routes()
  }

  midlleware () {
    this.express.use(flash())
    this.express.use(
      express.urlencoded({
        extended: true
      })
    )

    // configuracao do session
    this.express.use(
      session({
        name: 'root',
        secret: 'MyAppSecret', // Cria um senha para nossa criptografia
        resave: true,
        store: new FileStore({
          path: path.resolve(__dirname, '..', 'tmp', 'sessions')
        }),
        saveUninitialized: true
      })
    )
  }
  view () {
    // configura o nunjucks

    nunjucks.configure(path.resolve(__dirname, 'app', 'views'), {
      watch: this.isDev,
      express: this.express,
      autoescape: true
    })

    // Configura o express para server arquivos publicos e estátios para nossa aplicação
    this.express.use(express.static(path.resolve(__dirname, 'public')))

    // set a view engine no express;
    this.express.set('view engine', 'njk')
  }
  routes () {
    this.express.use(routes)
  }
}

module.exports = new Server().express
