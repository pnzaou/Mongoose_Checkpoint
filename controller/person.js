const personModel = require('../model/Person')
const db = require('../db')

const createPerson = async (p) => {
    const person = new personModel(p)
    await db.connexion()
     try {
        data =  await person.save()
        console.log('Successful', data)
     } catch (error) {
        console.log('Unsuccessful', error)
     }
    await db.deconnexion()
}

const createManyPersons = async (p) => {
    await db.connexion()
    try {
        const data = await personModel.create(p)
        console.log('Successful', data)
    } catch (error) {
        console.log('Unsuccessful', error)
    }
    await db.deconnexion()
}

const findByName = async (n) => {
    await db.connexion()
    try {
        const data = await personModel.find({nom: n})
        console.log('Successful')
        data.forEach(el => console.log(el))
    } catch(error) {
        console.log('Unsuccessful', error)
    }
    await db.deconnexion()
}

const findByFavoriteFood = async (f) => {
    await db.connexion()
    try {
        const data = await personModel.findOne({favoriteFoods: f})
        console.log('Successful', data)
    } catch (error) {
        console.log('Unsuccessful', error)
    }
    await db.deconnexion()
}

const findById = async (personId) => {
    await db.connexion()
    try {
        const data = await personModel.findById(personId)
        console.log('Successful', data)
    } catch (error) {
        console.log('Unsuccessful', error)
    }
    await db.deconnexion()
}

const findEditThenSave = async (personId) => {
    await db.connexion()
    try {
        const data = await personModel.findById(personId)
        data.favoriteFoods.push('hamburger')
        const dataUpdate = await data.save()
        console.log('Successful', dataUpdate)
    } catch (error) {
        console.log('Unsuccessful', error)
    }
    await db.deconnexion()
}

const updateAge = async (n) => {
    await db.connexion()
    try {
        const data = await personModel.findOneAndUpdate({nom: n}, {age: 20}, {new: true})
        console.log('Successful', data)
    } catch (error) {
        console.log('Unsuccessful', error)
    }
    await db.deconnexion()
}

const deletePerson = async (personId) => {
    await db.connexion()
    try {
        const rep = await personModel.findByIdAndDelete(personId)
        console.log('Successful', rep);
    } catch (error) {
        console.log('Unsuccessful', error)
    }
    await db.deconnexion()
}

const deleteManyPersons = async () => {
    await db.connexion()
    try {
        const rep = await personModel.deleteMany({nom: 'Mary'})
        console.log('Successful', rep)
    } catch (error) {
        console.log('Unsuccessful', error)
    }
    await db.deconnexion()
}

const search = async () => {
    await db.connexion()
    try {
        const data = await personModel.find({favoriteFoods: 'Burritos'})
        .sort({nom : 1}).limit(2).select('-age')
        console.log('Successful');
        data.forEach(el => console.log(el))
    } catch (error) {
        console.log('Unsuccessful', error)
    }
    await db.deconnexion()
}

module.exports = {
    createPerson,
    createManyPersons,
    findByName,
    findByFavoriteFood,
    findById,
    findEditThenSave,
    updateAge,
    deletePerson,
    deleteManyPersons,
    search
}