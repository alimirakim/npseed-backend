const router = require('express-promise-router')()

router.get('/', (req, res) => {
  res.redirect("/")
})

module.exports = { router }