const bcrypt = require('bcryptjs')
const userRouter = require('express-promise-router')()
const { User, Character } = require('../db/models')
const { signupValidators, loginValidators } = require('../validators')
const { makeToken, checkAuth } = require("../auth")

// Get user by id
userRouter.get("/:id",
  // checkAuth,
  async (req, res) => {
    const user = await User.findByPk(req.params.id)
    delete user.hashword
    if (user) res.json(user)
    else next(Errors("Couldn't get the User, prolly didn't find it."))
  }
)
// EXAMPLE
// {
//   "id": 1,
//   "username": "admin",
//   "email": "almyki@gmail.com",
//   "createdAt": "2020-10-31T17:31:31.870Z",
//   "updatedAt": "2020-10-31T17:31:31.870Z"
// }

// Make new user and token
userRouter.post("/",
  // emailValidator,
  signupValidators,
  async (req, res, next) => {
    let { username, email, password } = req.body
    if (!email) email = null
    const hashword = bcrypt.hashSync(password, 10)
    try {
      const user = await User.create({ username, email, hashword })
      delete user.hashword
      const token = makeToken(user)
      if (user && token) res.status(201).json({ token, user })
      else next(Error("I have no clue why, but the User wasn't made."))
    } catch (err) {
      next(err)
    }

  }
)
// EXAMPLE Request Body
// {
//   "username": "Bentley",
//   "email": "bentley@gmail.com",
//   "password": "sulbingsoo"
// }
// EXAMPLE Response
// {
//   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjo3LCJ1c2VybmFtZSI6IkJlbnRsZXkiLCJlbWFpbCI6ImJlbnRsZXlAZ21haWwuY29tIn0sImlhdCI6MTYwNDE4NzQ2MywiZXhwIjoxNjA0MjQ3OTQzfQ.T9W9GmVRJU4cnF9vkvz9lNE_o0qLNwCtyHzb-iQKhvs",
//   "user": {
//     "id": 7,
//     "username": "Bentley",
//     "email": "bentley@gmail.com",
//     "hashword": {
//       "type": "Buffer",
//       "data": [
//         36,
//         50,
//         97,
//         <<...>>
//       ]
//     },
//     "updatedAt": "2020-10-31T23:37:43.729Z",
//     "createdAt": "2020-10-31T23:37:43.729Z"
//   }
// }


// Make user authentication token
userRouter.put("/token",
  loginValidators,
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
    // TODO Why does Postman show no return?
    res.json({ token, user })
  }
)

// Check if token is valid. Return error if not.
userRouter.get("/token",
  checkAuth,
  async (req, res) => {
    if (req.user) res.json(req.user)
    else {
      const err = Error("No token no good")
      err.status = 401
      err.title = "401 Token Fail"
      err.errors = ["You need a token to get in!"]
      return next(err)
    }
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



module.exports = { userRouter }