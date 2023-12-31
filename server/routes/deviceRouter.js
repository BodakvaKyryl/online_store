const Router = require('express').Router
const router = new Router()
const deviceController = require('../controllers/deviceController')
const checkRole = require('../middleware/roleMiddleware')

router.post('/', checkRole('ADMIN'), deviceController.create)
router.get('/', deviceController.getAll)
router.get('/:id', deviceController.getOne)

module.exports = router
