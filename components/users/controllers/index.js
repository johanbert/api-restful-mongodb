// Using Node.js `require()`
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test_bit');

const model = {
    nombre: String,
    edad: Number,
    fecha: Date
}
const User = mongoose.model('users', model);

const getter = async(req, res) => {
    const users = await User.find();
    res.status(200).json(users)
}

module.exports = { getter }