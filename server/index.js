require('dotenv').config()

const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
	res.status(200).json({ message: 'Server is running.' })
})

const startDBConnection = async () => {
	try {
		await sequelize.authenticate()
		await sequelize.sync()

		app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
	} catch (e) {
		console.log(e)
	}
}

startDBConnection()