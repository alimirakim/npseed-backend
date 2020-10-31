const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.redirect("/")
})

// TODO Specify to include essential-category traits only
// Fetch array of User's Chars
router.get("/users/:id/characters", async (req, res) => {
  const userChars = await Character.findAll({
    where: { userId: req.params.id },
    include: CharTrait,
  })
  res.json(userChars)
})

// Fetch a character's full details by id
router.get("/characters/:id", async (req, res) => {
  const char = await Character.findByPk(req.params.id, {
    include: [Category, TraitType, {model: Trait, where: {/* How to specify by chartrait? */}]
  })
  return res.json(char)
})

// TODO Another one that I can't work out how to pull with the restrictions I want...
// Fetch a the traits of one category for a character
router.get("/characters/:charId/categories/:catId/traits", async (req, res) => {
  const charCatTraits = await Traits.findAll({where: {}})
  return res.json(charCatTraits)
})

// Fetch a User by id
router.get("/users/:id", async (req, res) => {
  const user = await user.findByPk(req.params.id, {
    attributes: { exclude: "hashword" },
  })
  return res.json(user)
})

// Fetch only Categories
router.get("/categories", async (req, res) => {
  const categories = await Category.findAll()
  return res.json(categories)
})

// Fetch all TraitTypes
router.get("/traitTypes", async (req, res) => {
  const traitTypes = await TraitType.findAll()
  return res.json(traitTypes)
})

// Fetch TraitTypes by Category id
router.get("/category/:id/traitTypes", async (req, res) => {
  const traitTypes = TraitType.findAll({ where: { categoryId: req.params.id } })
  return res.json(traitTypes)
})

// TODO How do I fetch in this direction?
// Fetch Traits by Category id
router.get("/category/:id/traits", async (req, res) => {
  const traits = Trait.findAll({ include: {model: Category, } })
  return res.json(traits)
})

// Fetch Traits by TraitType id
route.get("/traitType/:id/traits", async (req, res) => {
  const traits = await Trait.findAll({ where: { traitTypeId: req.paramsId } })
  return res.json(traits)
})

// *****************************************************************************
// Generators

route.get("/generators", async (req, res) => {
  const generators = await Generator.findAll()
  return res.json(generators)
})

// Fetch a generator and all its details, including all odds
route.get("/generators/:id", async (req, res) => {
  const generator = await Generator.findByPk(req.params.id, {
    include: [{model: User, attributes: {exclude: "hashword"}}, TraitChance, Category, TraitType, Trait]
  })
  return res.json(generator)
})


// Fetch all the custom generators of a user
route.get("/users/:id/generators", async (req, res) => {

})

// Fetch the GenTraitChances of one Category for a Generator
route.get("/generators/:genId/categories/:catId/traitChances", async (req, res) => {

})

// TODO same deal...
// Fetch the odds for one trait type of a generator
route.get("/generators/:genId/traitType/:typeId/traitOdds", async (req, res) => {
  const traitChances = await TraitChance.findAll({where: })
  return res.json(traitChances)
})



module.exports = router