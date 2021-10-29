const { v1: uuidv1 } = require('uuid');
const mongoose = require('../../../common/services/mongodb');
const userModel = require('../models');

const User = mongoose.model('users', userModel);

const getUsers = async(req, res) => {
    const users = await User.find();
    res.status(200).json(users)
}

const addUser = async(req, res) => {
    req.body.fecha = new Date();
    const user = new User(req.body)
    await user.save()

    res.status(200).json({ ok: true })
}

const editAll = async(req, res) => {
    const newBody = {}
    let hasAllProperties = true

    if (!mongoose.Types.ObjectId.isValid(req.params.id))
        return res.status(404).json({ message: `invalid Format _id ${req.params.id}` })

    // Validamos si tiene todas las propiedades del modelo userModel y hacemos reasignacion
    for (key in req.body) {
        console.log('key', key);
        if (!userModel.hasOwnProperty(key)) {
            console.log('hasAllPropertieshasAllProperties', hasAllProperties);
            hasAllProperties = false
            break
        }
        newBody[key] = hasAllProperties ? req.body[key] : null
    }

    if (!hasAllProperties)
        return res.status(404).json({ message: `Your body properties doesn't allowed` })

    const filter = { _id: mongoose.Types.ObjectId(req.params.id) };
    const update = req.body;

    let doc = await User.findOneAndUpdate(filter, update, { new: true });

    if (!doc)
        return res.status(404).json({ message: `_id ${req.params.id} doesn't exists` })

    res.status(200).json(doc)
}

module.exports = { getUsers, addUser, editAll }