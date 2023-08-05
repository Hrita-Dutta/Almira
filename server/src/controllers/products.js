const Products = require('../models/products')

const addNewProducts = async(req,res) => {
    await Products.create(req.body)
    res.json({
        msg:'success'
    })
}

module.exports = {addNewProducts};