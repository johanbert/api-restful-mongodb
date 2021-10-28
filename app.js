const { v1: uuidv1 } = require('uuid');
const helmet = require('helmet');
const express = require('express');
const app = express()
const PORT = 3001

app.use(helmet())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.route('/api/v1/users')
    .get()
    .post()

app.route('/api/v1/users/:id')
    .put()
    .patch()
    .delete()

app.listen(PORT, () => console.log('SERVER ON'))