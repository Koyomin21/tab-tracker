const User = require('./routes/User')

module.exports = (app) => {
    app.post('/api/register',User.createUser),
    app.get('/api/users',User.getUsers),
    app.post('/api/login',User.login)
}