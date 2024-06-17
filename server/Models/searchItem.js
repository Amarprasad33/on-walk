const mongoose = require('mongoose');

const searchItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  type_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
});

const SearchItem = mongoose.model('SearchItem', searchItemSchema);

module.exports = SearchItem;
