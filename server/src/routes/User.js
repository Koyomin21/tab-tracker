const db = require('./index')
const jwt = require('jsonwebtoken')
const config = require('../config/conifg')

function jwtSignUser (user) {
  const ONE_WEEK = 60*60*24*7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}


const getUsers = (request, response) => {
  db.query("SELECT * FROM users ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error
    }
    console.log(results.rows)
    response.status(200).json(results.rows)
  })
}


const login = (request, response) => {
  try{
    const {username, password} = request.body
    console.log("Data: Username: ",username, ", Password: ",password)
    db.query("SELECT * FROM users where username = $1",[username], (error,results) => {
      if(error){
        console.log(error);
        return response.status(403).send({
          error: 'The login information was incorrect'
        })
      }
      user = results.rows[0] || {}
      console.log("User: ",user.username);
      console.log("User: ",user.password);
      if(!user.username){
        return response.status(403).send({
          error: 'The login information was incorrect(username)'
        })
      }
      const isPasswordValid = password === user.password
      if(!isPasswordValid){
        return response.status(403).send({
          error: 'The login information was incorrect(password)'
        })
      }
      
      response.send({
        user,
        token: jwtSignUser(user)
      })
    })
      

  } catch(error) {
    console.log(error);
    response.status(500).send({
      error: 'An error has occured trying to log in'
    })
  }
}

const createUser = (request, response) => {
  const { email, password, username } = request.body
  db.query('INSERT INTO users (email, password,username) VALUES ($1, $2, $3)', [email, password, username], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).json(results.rowCount)
  })
}


const getUserById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}
  
  
  const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, email } = request.body
  
    pool.query(
      'UPDATE users SET name = $1, email = $2 WHERE id = $3',
      [name, email, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
      }
    )
}
  
  const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID: ${id}`)
    })
}



module.exports = {
    getUsers,
    createUser,
    login
}
