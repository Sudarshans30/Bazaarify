const { Schema, model } = require('mongoose');

const productSchema = new Schema({
  
   name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
 
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
});




const Product = model('Product', productSchema);

module.exports = Product;








// const { Schema, model } = require('mongoose');

// const productSchema = new Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
  
//   category: {
//     type: String,
//     required: true,
//   },
//   price: {
//     type: Number,
//   },
//   discountPrice: {
//     type: Number,
//     // required: true, 
//   },
//   tags: {
//     type: String,
//   },
//   image: {
//     type: String,
//   },
//   link: {
//     type: String,
//   },
//   title: {
//     type: String,
//     required: true,
//   },
//   ratings: {
//     type: Number,
//   },
//   shopId: {
//     type: String,
//     required: true,
//   },
//   shop: {
//     type: Object,
//     required: true,
//   },
 
//   createdAt: {
//     type: Date,
//     default: Date.now(),
//   },

//   stockCount:{
//     type: Number,
//   },
//   // sold_out: {
//   //   type: Number,
//   //   default: 0,
//   // },
//   reviews: [
//     {
//       user: {
//         type: Object,
//       },
//       rating: {
//         type: Number,
//       },
//       comment: {
//         type: String,
//       },
//       productId: {
//         type: String,
//       },
//       createdAt:{
//         type: Date,
//         default: Date.now(),
//       }
//     },
//   ],




// });
// const Product = model('Product', productSchema);

// module.exports = productSchema;