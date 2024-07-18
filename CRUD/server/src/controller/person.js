const personModel = require('../model/Person')

const createPerson = async (req, res) => {
    let data = req.body
    data = {...data, favoriteFoods: data.favoriteFoods.split(',')}
    const person = new personModel(data)
     try {
        const rep =  await person.save()
        const msg = 'Personne ajoutées avec succès !'
        res.status(201).json({message: msg, data: rep})
     } catch (error) {
        const msg = 'Erreur lors de l\'enregistrement'
        res.status(500).json({message: msg, data: error})
     }
}

const createManyPersons = async (p) => {
    try {
        const data = await personModel.create(p)
        console.log('Successful', data)
    } catch (error) {
        console.log('Unsuccessful', error)
    }
}

const findAllPersons = async (req, res) => {
    try {
        const data = await personModel.find()
        const msg = 'Tous les utilisateurs ont été récupérés avec succès !'
        res.status(200).json({message: msg, data: data})
    } catch (error) {
        const msg = 'Erreur lors de la récupération des utilisateurs !'
        res.status(500).json({message: msg, data: error.message})
    }
}

const findByName = async (n) => {
    try {
        const data = await personModel.find({nom: n})
        console.log('Successful')
        data.forEach(el => console.log(el))
    } catch(error) {
        console.log('Unsuccessful', error)
    }
}

const findByFavoriteFood = async (f) => {
    try {
        const data = await personModel.findOne({favoriteFoods: f})
        console.log('Successful', data)
    } catch (error) {
        console.log('Unsuccessful', error)
    }
}

const findById = async (req, res) => {
    try {
        const data = await personModel.findById(req.params.id)
        const msg = 'L\'utilisateur a été récupéré avec succès !'
        res.status(200).json({msg: msg, data: data})
    } catch (error) {
        const msg = 'Erreur lors de la récupération de l\'utilisateur !'
        res.status(500).json({msg:msg, data:error})
    }
}

const findEditThenSave = async (personId) => {
    try {
        const data = await personModel.findById(personId)
        data.favoriteFoods.push('hamburger')
        const dataUpdate = await data.save()
        console.log('Successful', dataUpdate)
    } catch (error) {
        console.log('Unsuccessful', error)
    }
}

const updatePerson = async (req, res) => {
    let person = req.body
    person = {...person, favoriteFoods: person.favoriteFoods.split(',')}
    try {
        const data = await personModel.findByIdAndUpdate(req.params.id, person, {new: true})
        const msg = 'Utilisateur modifié avec succès !'
        res.status(201).json({message: msg, data: data})
    } catch (error) {
        const msg = 'Erreur lors de la modification'
        res.status(500).json({message: msg, data: error})
    }
}

const updateAge = async (n) => {
    try {
        const data = await personModel.findOneAndUpdate({nom: n}, {age: 20}, {new: true})
        console.log('Successful', data)
    } catch (error) {
        console.log('Unsuccessful', error)
    }
}

const deletePerson = async (req, res) => {
    try {
        const rep = await personModel.findByIdAndDelete(req.params.id)
        const msg = 'l\'utilisateur a été supprimé avec succès !'
        res.status(200).json({message: msg, data: rep})
    } catch (error) {
        res.status(500).json({message: msg, data: error})
    }
}

const deleteManyPersons = async () => {
    try {
        const rep = await personModel.deleteMany({nom: 'Mary'})
        console.log('Successful', rep)
    } catch (error) {
        console.log('Unsuccessful', error)
    }
}

const search = async () => {
    try {
        const data = await personModel.find({favoriteFoods: 'Burritos'})
        .sort({nom : 1}).limit(2).select('-age')
        console.log('Successful');
        data.forEach(el => console.log(el))
    } catch (error) {
        console.log('Unsuccessful', error)
    }
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