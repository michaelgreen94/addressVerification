let express = require('express')
let bp = require('body-parser')
let server = express()
let PORT = process.env.PORT || 5000
let cors = require('cors')

let key = process.env.SECRET_MESSAGE

server.use(cors())
server.use(bp.json())
server.use(bp.urlencoded(({
  extended: true
})))

server.use(express.static(__dirname + '/../www/'))

let addressRoutes = require('./routes/address')

server.use('/api/addresses', addressRoutes)

server.use('/api/*', (err, req, res, next) => {
  res.status(400).send(err)
})
server.use('*', (req, res, next) => {
  res.status(404).send('<h1>404</h1>')
})

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})