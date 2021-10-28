const express = require('express')
const app = express()
const usersEndpoints = require('../components/users/routes')
const GLOBAL_PATH = '/api/v1'
    // http://localhost:3001/api/v1/users
    // http://localhost:3001/api/v1/users/:id
app.use(GLOBAL_PATH, usersEndpoints)

module.exports = app