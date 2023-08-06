const express = require('express')
const router = express.Router()
const {addNewProducts, getAllProducts} = require('../controllers/products')

router.post('/products', addNewProducts)
router.get('/products', getAllProducts)
// router.get('/users', getAllUser)
// router.get('/users/:id', getUserById)
// router.delete('/users/:id', deleteExistingUser)
// router.put('/users/:id', updateExistingUser)

module.exports = router;