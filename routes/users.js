const bcrypt = require('bcryptjs')
const usersRouter = require('express-promise-router')()
const { User, Character, CharTrait, Trait, TraitOption } = require('../db/models')
const { userValidators, emailValidator } = require('./validators')
const { makeToken, checkAuth } = require("../auth")

usersRouter.get("/users/:id/characters",
  checkAuth,
  async (req, res) => {
    const userChars = await Character.findAll({
      where: { userId: req.params.id },
      include: {model: CharTrait, include: [Trait, TraitOption]},
    })
    console.log("\n\nuserChars with traits", userChars)
    return res.json(userChars)
  }
)

usersRouter.get("/users/:userId/characters/:charId",
checkAuth,
async (req, res) => {
  const char = await Character.findByPk(req.params.charId, {
    include: [Trait, TraitOption]
  })
  console.log("\n\nA single char with traits", char)
})









// Get user by id
usersRouter.get("/users/:id",
  checkAuth,
  async (req, res) => {
    // TODO Do I need to parseInt(req.params.id, 10) like Twitter clone?
    console.log("eyyyy?\n\n")
    const user = await User.findByPk(req.params.id, {
      include: Character,
      attributes: ["id", "username", "email"]
    })
    debugger
    if (user) res.json({ user })
  })

usersRouter.get("/token",
  checkAuth,
  async (req, res) => {
    if (req.user) return res.json(req.user)
  })

// Make user authentication token
usersRouter.put("/token",
  userValidators,
  async (req, res, next) => {
    const { username, password } = req.body
    const user = await User.findOne({
      where: { username },
      include: Character,
    })
    // Reject request if user doesn't exist or password is invalid
    if (!user || await user.validatePassword(password)) {
      const err = Error("Login big fail")
      err.status = 401
      err.title = "401 Login Fail"
      err.errors = ["The provided credentials are invalid."]
      return next(err)
    }
    const token = makeToken(user)
    delete user.hashword
    res.json({ token, user })
  })

// Why successful even if checkAuthr fails?
usersRouter.delete("/token",
  checkAuth,
  async (req, res) => {
    req.user.token = null
    await req.user.save()
    res.json({ message: 'Deleted that token for ya' })
  }
)

// Make new user and token
usersRouter.post("/users",
  // emailValidator,
  userValidators,
  async (req, res) => {
    let { username, email, password } = req.body
    if (!email) email = null
    const hashword = bcrypt.hashSync(password, 10)
    await User.create({ username, email, hashword })
    const user = await User.findOne({
      where: { username },
      attributes: { exclude: ["hashword"] },
      include: Character,
    })
    const token = makeToken(user)
    res.status(201).json({
      token,
      user
    })
  }
)

// Update user data
// usersRouter.patch("/:id", async (req, res) => {
//   const user = await User.findByPk(req.params.id)
//   if (user) {
//     const { username, email, password } = req.body
//     // TODO Can I do (user.username || username) ?
//     user.username = username
//     user.email = email
//     user.password = bcrypt.hashSync(password)
//   }
// })



module.exports = usersRouter