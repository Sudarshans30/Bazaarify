const router = require('express').Router();
// const {
//   getProducts

// } = require('../../controllers/product-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

const {Product} = require('../../models');

// router.route('/products').get(getProducts)

router.get('/', (req, res) => {
  console.log("hellow");
  Product.find({})
  .then(products => {
    console.log(products);
    res.json(products);
    })
})


module.exports = router; 