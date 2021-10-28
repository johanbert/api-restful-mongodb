const express = require('express')
const router = express.Router()

router.route('/users')
    .get((req, res) => res.status(200).send('test GET'))
    .post((req, res) => res.status(200).send('test POST'))

router.route('/users/:id')
    .put()
    .patch()
    .delete()

module.exports = router