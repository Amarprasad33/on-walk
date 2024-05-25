const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  itemID: {
    type: mongoose.Schema.Types.ObjectId
  },
  itemCategory: {
    type: String,
    required: true
  },
  itemName: {
    type: String,
    required: true
  },
  itemBrand: String,
  itemPrice: Number,
  itemColor: String,
  itemDescription: String,
  itemPrice: Number,
  itemDiscountPrice: Number,
  itemSize: String, // Conditional: used if clothing or home decor
  itemMaterial: String, // Conditional: used if clothing or home decor
  itemGender: String, // Conditional: used if clothing
  itemRating: Number,
  itemQuantity: Number,
  inStock: {
    type: Boolean,
    default: true
  },
  itemModelNo: String, // Conditional: used if electronic
  itemWeight: Number, // Conditional: used if electronic
  warranty: String // Conditional: used if electronic
});

const storeSchema = new mongoose.Schema({
  storeId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  itemList: [itemSchema]
});

// storeSchema.pre('save', async function(next) {
//     // userSchema.pre('updateOne', function(next) {
//     //     this.set({ updatedAt: Date.now() });
//     //     next();
//     //   });
//     console.log(this);
//     next();
// });

const Store = mongoose.model('Store', storeSchema);

module.exports = Store;
