const mongoose = require('mongoose');

const saveItemSchema = new mongoose.Schema({
    consumer_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    },
    saved_item: [{
      store_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
      },
      item_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
      }
    }]
  });
  

const SaveItem = mongoose.model('SaveItem', saveItemSchema);

module.exports = SaveItem;
