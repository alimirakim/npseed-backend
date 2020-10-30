
const {
  username,
  password,
  database,
  host,
} = require('./index').db

module.exports = {
  development: {
    username,
    password,
    database,
    host,
    dialect: 'postgres',
  },
  production: {
    use_env_variable: 'postgres://mqbqkpbgwcyyqa:25f088cb7af99fb4d77b3070ab8c5ceeb2428f480abfdc7835912fc59158c2f4@ec2-50-17-197-184.compute-1.amazonaws.com:5432/df8at2nbq1q82e',
    dialect: 'postgres',
    seederStorage: 'sequelize',
  }
}
