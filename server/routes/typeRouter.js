const Router = require('express').Router
const router = new Router()
const TypeController = require('../controllers/typeController')
const checkRole = require('../middleware/roleMiddleware')

router.post('/', checkRole('ADMIN'), TypeController.create)
router.get('/', TypeController.getAll)

module.exports = router
