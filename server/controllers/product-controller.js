// import user model
const { Product } = require('../models');

// import sign token function from auth
const { signToken } = require('../utils/auth');
console.log("11111111111111111")
module.exports = {
  // get products
  getProducts(req, res) {
    console.log("11111111111111111")
    Product.find({})
      .then((productsData) => {
        console.log(productsData)
      res.json(productsData)
  })

  
      .catch((err) => res.status(500).json(err));
  },
 
};
