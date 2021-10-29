const express = require('express')
const { getter } = require('./controllers')
const router = express.Router()


router.route('/users')
    .get(getter)
    .post((req, res) => res.status(200).send('test POST'))

router.route('/users/:id')
    .put()
    .patch()
    .delete()

module.exports = router