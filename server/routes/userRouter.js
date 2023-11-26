const Router = require('express').Router
const router = new Router()

router.post('/registration')
router.post('/login')
router.get('/auth', (req, res) => {
	res.json({ message: 'user auth router is working' })
})

module.exports = router
