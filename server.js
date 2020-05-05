const express = require('express')
const next = require('next')
const bodyParser = require('body-parser');
const path = require("path")

const routes = require('./routes')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handler = routes.getRequestHandler(app)

app.prepare().then(() => {
  const server = express()
  server.use(bodyParser.urlencoded({ extended: true }))
  server.use(bodyParser.json())

  // static pages
  server.use("/index(.html)?/", express.static(path.join(__dirname, "./static/pages/index.html")))
  server.use(handler)

  server.all('*', (req, res) => {
    return handler(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
