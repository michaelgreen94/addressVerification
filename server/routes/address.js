let router = require('express').Router()
const googleApi = 'https://maps.googleapis.com/maps/api/place/textsearch/json?'
// let baseURL = 'https://maps.googleapis.com/maps/api/place/textsearch/json?'

router.get('/' + googleApi, (req, res, next) => {
  res.json();
})

module.exports = router