const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  store_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  store_image : [{
    type: Buffer
  }],
  item_image: [
    {
      type: Buffer
    }
  ]
});

const Image = mongoose.model('ImageData', imageSchema);

module.exports = Image;
