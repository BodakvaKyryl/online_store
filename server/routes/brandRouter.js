const Router = require('express').Router
const router = new Router()
const brandController = require('../controllers/brandController')
const checkRole = require('../middleware/roleMiddleware')

router.post('/', checkRole('ADMIN'), brandController.create)
router.get('/', brandController.getAll)

module.exports = router
