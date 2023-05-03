const router = require('express').Router();

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

// Get a product by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;

  Product.findById(id)
    .then(product => {
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.json(product);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    });
});



module.exports = router; 