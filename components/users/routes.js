const express = require('express')
const { getUsers, addUser, editAll } = require('./controllers')
const router = express.Router()


router.route('/users')
    .get(getUsers)
    .post(addUser)

router.route('/users/:id')
    .put(editAll)
    .patch()
    .delete()

module.exports = router