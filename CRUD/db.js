const mongoose = require('mongoose')
const url = 'mongodb+srv://enz:Bxxmin%4066%402024@premier-cluster-test.i1gqm07.mongodb.net/checkpoint?retryWrites=true&w=majority&appName=Premier-Cluster-Test'

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