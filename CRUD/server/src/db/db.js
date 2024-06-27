const mongoose = require('mongoose')

require('dotenv').config()
const url = process.env.MONGOURI

const connexion = async () => {
    try {
        const db = await mongoose.connect(url)
        console.log(`Connected ${db.connection.name}`);
    } catch (error) {
        console.log('Connexion error', error);
    }
}

const deconnexion = async () => {
    try {
        await mongoose.disconnect()
        console.log('Deconnected')
    } catch (error) {
        console.log('Deconnexion error', error);
    }
}

module.exports = {
    connexion,
    deconnexion
}