const catRouter = require('express-promise-router')()
const { Category, TraitType, Trait, TagType, Tag, } = require('../db/models')

// Fetch only Categories
// catRouter.get("/", async (req, res) => {
//   const categories = await Category.findAll()
//   return res.json(categories)
// })

// Fetch all traits
catRouter.get("/traitTypes", async (req, res) => {
  const categories = await Category.findAll({
    attributes: ["id", "category"],
    include: {
      model: TraitType,
      attributes: ["id", "traitType"],
      include: [
        {
          model: TagType,
          attributes: ["id", "tagType"]
        }, 
        {
          model: Trait,
          attributes: ["id", "trait"],
          include: {
            model: Tag,
            attributes: ["id", "tag"]
          }
        }
      ]
    }
  })
// console.log("\ncategories?", categories[0].TraitTypes[0])
  const cleanCats = categories.map(cat => {
    return {
      id: cat.id,
      category: cat.category,
      traitTypes: cat.TraitTypes.map(t => {
        return {
          id: t.id,
          type: t.traitType,
          tagTypes: t.TagTypes.map(t => {
            return {
              id: t.id,
              type: t.tagType,
            }
          }),
          traits: t.Traits.map(t => {
            return {
              id: t.id,
              trait: t.trait,
              tags: t.Tags.map(t => {
                return {
                  id: t.id,
                  tag: t.tag,
                }
              })
            }
          })
        }
      })
    }
  })
  return res.json(cleanCats)
})

// Fetch TraitType/Traits of a Category
catRouter.get("/:id(\\d+)", async (req, res) => {
  const category = await Category.findByPk(catId, {
    include: {
      model: TraitType,
      attributes: ["id", "traitType", "CategoryId"],
      include: {
        model: Trait,
        attributes: ["id", "trait"]
      }
    }
  })
  const cleanCat = category.TraitTypes.map(type => {
    const traits = type.Traits.map(t => t.trait)
    return {
      catId: req.params.id,
      traitType: type.traitType,
      traits,
    }
  })
  console.log("\ncleanCat!", cleanCat)
  return res.json(cleanCat)
  // console.log("what is this??", jsonCat)
  // return jsonCat
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
// catRouter.get("/traitType/:id(\\d+)/traits", async (req, res) => {
//   const traits = await Trait.findAll({ where: { TraitTypeId: req.paramsId } })
//   return res.json(traits)
// })


// Fetch all TraitTypes
// catRouter.get("/traitTypes", async (req, res) => {
//   const traitTypes = await TraitType.findAll()
//   return res.json(traitTypes)
// })

module.exports = { catRouter }