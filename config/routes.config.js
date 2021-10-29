const express = require('express')
const app = express()
const usersEndpoints = require('../components/users/routes')
const GLOBAL_PATH = '/api/v1'

app.use(GLOBAL_PATH, usersEndpoints)

module.exports = app