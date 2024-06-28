const personController = require('../controller/person')
const expres = require('express')
const router = expres.Router()

router.post('/person', personController.createPerson)

router.get('/persons', personController.findAllPersons)

router.route('/persons/:id')
    .get(personController.findById)
    .put(personController.updatePerson)
    .delete(personController.deletePerson)

module.exports = router