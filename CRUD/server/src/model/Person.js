const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    nom: {type: String, required: true },
    age: Number,
    favoriteFoods: [String]
})

module.exports = mongoose.model('Person', userSchema)