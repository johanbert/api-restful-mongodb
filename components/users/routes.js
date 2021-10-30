const express = require('express')
const { getUsers, addUser, editAll, editSomeone, remove } = require('./controllers')
const { middlewareValidateId, middlewareValidateModel } = require('./middlewares')
const router = express.Router()

router.route('/users')
    .get(getUsers)
    .post(addUser)

router.route('/users/:id')
    .all([middlewareValidateId, middlewareValidateModel])
    .put(editAll)
    .patch(editSomeone)
    .delete(remove)

module.exports = router