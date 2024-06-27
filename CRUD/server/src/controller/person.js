const personModel = require('../model/Person')
const db = require('../db/db')

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

const findAllPersons = async (req, res) => {
    await db.connexion()
    try {
        const data = await personModel.find()
        const msg = 'Tous les utilisateurs ont été récupérés avec succès !'
        res.status(200).json({message: msg, data: data})
    } catch (error) {
        const msg = 'Erreur lors de la récupération des utilisateurs !'
        res.status(500).json({message: msg, data: error.message})
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

const findById = async (req, res) => {
    await db.connexion()
    try {
        const data = await personModel.findById(req.params.id)
        const msg = 'L\'utilisateur a été récupéré avec succès !'
        res.status(200).json({msg: msg, data: data})
    } catch (error) {
        const msg = 'Erreur lors de la récupération de l\'utilisateur !'
        res.status(500).json({msg:msg, data:error})
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

const updatePerson = async (req, res) => {
    await db.connexion()
    try {
        const data = await personModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
        const msg = 'Utilisateur modifié avec succès !'
        res.status(201).json({message: msg, data: data})
    } catch (error) {
        const msg = 'Erreur lors de la modification'
        res.status(500).json({message: msg, data: error})
    }
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

const deletePerson = async (req, res) => {
    await db.connexion()
    try {
        const rep = await personModel.findByIdAndDelete(req.params.id)
        const msg = 'l\'utilisateur a été supprimé avec succès !'
        res.status(200).json({message: msg, data: rep})
    } catch (error) {
        res.status(500).json({message: msg, data: error})
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
    findAllPersons,
    findByName,
    findByFavoriteFood,
    findById,
    findEditThenSave,
    updatePerson,
    updateAge,
    deletePerson,
    deleteManyPersons,
    search
}