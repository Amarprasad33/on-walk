const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  storeId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  shopname: String,
  location: {
    type: { type: String, default: 'Point' },
    coordinates: [Number],
  },
});

productSchema.index({ location: '2dsphere' });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;