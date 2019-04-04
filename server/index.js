console.log(process.env.SECRET_MESSAGE)
let express = require('express')
let bp = require('body-parser')
let server = express()
let port = 3000
let cors = require('cors')

server.use(cors())

server.use(bp.json())

server.use(bp.urlencoded(({
  extended: true
})))

server.use(express.static(__dirname + '/../www/'))

let addressRoutes = require('./')