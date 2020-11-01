const genRouter = require('express-promise-router')()
const { User, Generator, TraitChance, TraitType, Trait, Category} = require('../db/models')

// *****************************************************************************
// Generators

genRouter.get("/generators", async (req, res) => {
  const generators = await Generator.findAll()
  return res.json(generators)
})

// Fetch a generator and all its details, including all odds
genRouter.get("/generators/:id", async (req, res) => {
  const generator = await Generator.findByPk(req.params.id, {
    include: [{ model: User, attributes: { exclude: "hashword" } }, TraitChance, Category, TraitType, Trait]
  })
  return res.json(generator)
})


// Fetch all the custom generators of a user
genRouter.get("/users/:id/generators", async (req, res) => {

})

// Fetch the GenTraitChances of one Category for a Generator
genRouter.get("/generators/:genId/categories/:catId/traitChances", async (req, res) => {

})

// TODO same deal...
// Fetch the odds for one trait type of a generator
// route.get("/generators/:genId/traitType/:typeId/traitOdds", async (req, res) => {
//   const traitChances = await TraitChance.findAll({where: })
//   return res.json(traitChances)
// })

module.exports = genRouter