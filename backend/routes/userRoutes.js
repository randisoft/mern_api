const express = require('express')
const router = express.Router()
const { registerUser, loginUser, getData } = require('../controllers/userController')

const { protect } = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/info', protect, getData)

module.exports = router