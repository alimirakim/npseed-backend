const { check, validationResult } = require('express-validator')

function validationErrorsHandler(req, res, next) {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    const errorMsgs = errors.array().map((err => err.msg))
    const err = Error("400 That request is bad to the bone.")
    err.status = 400
    err.title = "400 Bad Request"
    err.errors = errorMsgs
    return next(err)
  }
  next()
}

const usernameValidator = check('username')
.exists()
.withMessage("Need username, pal.")
    .isLength({ max: 40 })
    .withMessage("Gotta' be between 1-40 letters long.")

const emailValidator = check('email')
    .isEmail()
    .withMessage("I need a valid email!")
    .isLength({ min: 3, max: 255 })
    .withMessage("That email's too long (or short).")

const passwordValidator = check('password')
    .isLength({ min: 8, max: 60 })
    .withMessage("Passwords gotta' be between 8-60 letters long.")
    .custom((password, {req}) => {
      if (password == req.body.confirmPassword) throw Error('Passwords need to be twinsies.')
      else return password
    })
  // check('confirmPassword')
  //   .exists({ checkFalsy: true })
  // TODO custom to check if exact match


const userValidators = [
  usernameValidator,
  passwordValidator,
  validationErrorsHandler,
]

const genValidators = []

const charValidators = []


module.exports = {
  validationErrorsHandler,
  userValidators,
  emailValidator,
  genValidators,
  charValidators,
}