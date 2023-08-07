const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productIds: Array, // String is shorthand for {type: String}
    userId: Number
  });
  
  const Products = mongoose.model('Products', productSchema);
  module.exports = Products;