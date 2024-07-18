const personController = require('../controller/person')
const {signUp, signIn} = require('../controller/user')
const expres = require('express')
const router = expres.Router()
const verifyToken = require('../middleware/authMiddleware')

router.post('/person', verifyToken, personController.createPerson)

router.get('/persons', verifyToken, personController.findAllPersons)

router.route('/persons/:id', verifyToken)
    .get(personController.findById)
    .put(personController.updatePerson)
    .delete(personController.deletePerson)

router.post('/signin', signIn)
router.post('/signup', signUp)

module.exports = router