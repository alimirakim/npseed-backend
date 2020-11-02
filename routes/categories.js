const catRouter = require('express-promise-router')()
const { Category, TraitType, Trait } = require('../db/models')

// Fetch only Categories
catRouter.get("/", async (req, res) => {
  const categories = await Category.findAll()
  return res.json(categories)
})

// Fetch TraitType/Traits of a Category
catRouter.get("/:id(\\d+)", async (req, res) => {
  const category = await Category.findByPk(req.params.id, {
    include: {
      model: TraitType,
      attributes: ["id", "traitType", "CategoryId"],
      include: {
        model: Trait,
        attributes: ["id", "trait"]
      }
    }
  })
  // console.log("\nraw category", category)
  const cleanCat = category.TraitTypes.map(type => {
    console.log("\ncat traitType", type)
    const traits = type.Traits.map(t => t.trait)
    return {
      catId: req.params.id,
      traitType: type.traitType,
      traits,
    }
  })
  console.log("\ncleanCat!", cleanCat)
  return res.json(cleanCat)
})
// EXAMPLE
// [{
//   "catId": "1",
//   "traitType": "race",
//   "traits": [
//     "aasimar",
//     "human",
//     "tiefling"
//   ]
// }, {
//     "catId": "1",
//     "traitType": "age",
//     "traits": [
//       "adult",
//       "child",
//       "elder"
//     ]
//   }]

// Fetch Traits by TraitType id
catRouter.get("/traitType/:id(\\d+)/traits", async (req, res) => {
  const traits = await Trait.findAll({ where: { TraitTypeId: req.paramsId } })
  return res.json(traits)
})


// Fetch all TraitTypes
// catRouter.get("/traitTypes", async (req, res) => {
//   const traitTypes = await TraitType.findAll()
//   return res.json(traitTypes)
// })

module.exports = { catRouter }