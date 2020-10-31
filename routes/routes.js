const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.redirect("/")
})

// Fetch array of User's Chars
router.get("/users/:id/characters", async (req, res) => {
  const userChars = await Character.findAll({
    where: { userId },
    include: [Trait, TraitOption],
  })
  res.json(userChars)
})

module.exports = router