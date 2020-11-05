const genRouter = require('express-promise-router')()
const { User, Generator, TagTypeChance, TagType, Chance, Tag, } = require('../db/models')

// *****************************************************************************
// Generators



// Fetch a generator and all its details, including all odds
genRouter.get("/chances/:id(\\d+)", async (req, res) => {
  const generator = await Generator.findByPk(req.params.id, {
    attributes: ["id", "title"],
    include: [
      {
        model: User,
        attributes: { exclude: "hashword" }
      }, {
        model: TagTypeChance,
        attributes: ["id", "chanceLock"],
        include: [
          {
            model: TagType,
            attributes: ["id", "tagType"],
            include: {
              model: Tag,
              attributes: ["id", "tag"],
              include: {
                model: Chance,
                attributes: ["id", "chance"],
              }
            }
          }
        ]
      }
    ]
  })

  const cleanTagTypes = generator.TagTypeChances.map(ttc => {
    return {
      id: ttc.id,
      chanceLock: ttc.chanceLock,
      typeId: ttc.TagType.id,
      type: ttc.TagType.tagType,
      chances: ttc.TagType.Tags.map(tagChances => {
        return {
          tagId: tagChances.id,
          tag: tagChances.tag,
          chanceId: tagChances.Chances[0].id,
          chance: tagChances.Chances[0].chance,
        }
      })
    }
  })
  const cleanGen = {
    id: generator.id,
    title: generator.title,
    user: generator.User,
    tagTypeChances: cleanTagTypes,
  }

  return res.json(cleanGen)
})

// state.generator.tagTypes[0].chances[0].trait
// state.generator.tagTypes[0].chances[0].chance




// genRouter.get("/generators", async (req, res) => {
//   const generators = await Generator.findAll()
//   return res.json(generators)
// })

// Fetch all the custom generators of a user
// genRouter.get("/users/:id(\\d+)/generators", async (req, res) => {

// })

// Fetch the GenTraitChances of one Category for a Generator
// genRouter.get("/generators/:genId(\\d+)/categories/:catId)\\d+)/chances", async (req, res) => {

// })

// TODO same deal...
// Fetch the odds for one trait type of a generator
// route.get("/generators/:genId/traitType/:typeId/traitOdds", async (req, res) => {
//   const traitChances = await TraitChance.findAll({where: })
//   return res.json(traitChances)
// })

module.exports = { genRouter }