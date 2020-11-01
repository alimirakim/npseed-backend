const charRouter = require('express-promise-router')()
const { User, Character, CharTrait, Category, TraitType, Trait } = require('../db/models')


// Fetch all Characters by User:id.
// Include TraitTypes from Category:id
// Include Traits of Character from Category:id

charRouter.get("/users/:userId/categories/:catId", async (req, res) => {
  const userChars = await Character.findAll({
    where: { UserId: req.params.userId },
    include: {
      model: TraitType,
      where: { CategoryId: req.params.catId },
      include: {
        model: Trait,
        include: {
          model: CharTrait,
          where: { CharacterId: req.params.userId },
          attributes: [],
        },
        attributes: ["trait"]
      },
      attributes: ["traitType"],
    },
    attributes: ["name"],
  })
  res.json(userChars)
})
// Return example for a User's Characters with Traits of a Category included
// var userChars = [
//   {
//     "name": "Rosalyn Reddish",
//     "TraitTypes": [
//       {
//         "traitType": "race",
//         "Traits": [
//           {
//             "trait": "human"
//           }
//         ],
//         "CharTrait": {
//           "CharacterId": 2,
//           "TraitId": 6,
//           "TraitTypeId": 1,
//           "createdAt": "2020-10-31T17:31:32.046Z",
//           "updatedAt": "2020-10-31T17:31:32.046Z"
//         }
//       }
//     ]
//   }
// ]



// Fetch a character's full details by id
charRouter.get("/:id", async (req, res) => {
  const char = await Character.findByPk(req.params.id, {
    include: [
      {
        model: TraitType,
        attributes: ["id", "traitType"],
        include: [{
          model: Category,
          attributes: ["category"]
        }, {
          model: Trait,
          attributes: ["id", "trait"],
          include: {
            model: CharTrait,
            attributes: [],
            where: { CharacterId: req.params.id }
          }
        }]
      }]
  })
  return res.json(char)
})
// Character full details example
// {
//   "id": 1,
//   "UserId": 1,
//   "name": "Lucien Leavitt",
//   "createdAt": "2020-10-31T17:31:31.945Z",
//   "updatedAt": "2020-10-31T17:31:31.945Z",
//   "TraitTypes": [
//     {
//       "id": 1,
//       "traitType": "race",
//       "Category": {
//         "category": "essentials"
//       },
//       "Traits": [
//         {
//           "id": 1,
//           "trait": "human"
//         }
//       ],
//       "CharTrait": {
//         "CharacterId": 1,
//         "TraitId": 1,
//         "TraitTypeId": 1,
//         "createdAt": "2020-10-31T17:31:32.046Z",
//         "updatedAt": "2020-10-31T17:31:32.046Z"
//       }
//     },
//     {
//       "id": 2,
//       "traitType": "age",
//       "Category": {
//         "category": "essentials"
//       },
//       "Traits": [
//         {
//           "id": 8,
//           "trait": "adult"
//         }
//       ],
//       "CharTrait": {
//         "CharacterId": 1,
//         "TraitId": 8,
//         "TraitTypeId": 2,
//         "createdAt": "2020-10-31T17:31:32.046Z",
//         "updatedAt": "2020-10-31T17:31:32.046Z"
//       }
//     }
//   ]
// }


// TODO Another one that I can't work out how to pull with the restrictions I want...
// Fetch the traits of one category for a character
charRouter.get("/:id/categories/:catId", async (req, res) => {
  const charCatTraits = await Trait.findAll({
    attributes: ["id", "trait"],
    include: [{
      model: CharTrait,
      attributes: [],
      where: { CharacterId: req.params.id }
    }, {
      model: TraitType,
      attributes: ["id", "traitType"]
    }]
  })
  return res.json(charCatTraits)
})

// A Character's Traits/TraitTypes for a Category by ids EXAMPLE
// [
//   {
//     "id": 1,
//     "trait": "human",
//     "TraitType": {
//       "id": 1,
//       "traitType": "race"
//     }
//   },
//   {
//     "id": 8,
//     "trait": "adult",
//     "TraitType": {
//       "id": 2,
//       "traitType": "age"
//     }
//   }
// ]

module.exports = { charRouter }