const catRouter = require('express-promise-router')()
const { Category, TraitType, Trait } = require('../db/models')

// Fetch only Categories
catRouter.get("/", async (req, res) => {
  const categories = await Category.findAll()
  return res.json(categories)
})

// Fetch TraitType/Traits of a Category
catRouter.get("/:id", async (req, res) => {
  const category = Category.findByPk(req.params.id, {
    include: {
      model: TraitType,
      attributes: ["id", "traitType"],
      include: {
        model: Trait,
        attributes: ["id", "trait"]
      }
    }
  })
  return res.json(category)
})

// Fetch Traits by TraitType id
catRouter.get("/traitType/:id/traits", async (req, res) => {
  const traits = await Trait.findAll({ where: { TraitTypeId: req.paramsId } })
  return res.json(traits)
})


// Fetch all TraitTypes
// catRouter.get("/traitTypes", async (req, res) => {
//   const traitTypes = await TraitType.findAll()
//   return res.json(traitTypes)
// })

module.exports = { catRouter }