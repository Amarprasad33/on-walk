const mongoose = require('mongoose');

// Define schema for storing binary data
const binaryDataSchema = new mongoose.Schema({
    type_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
      },
      type: {
        type: String,
        enum: ['consumer', 'merchant', 'item', 'store'], // Adjust enum values as needed
        required: true
      },
    binaryData: Buffer,
});

const BinaryData = mongoose.model('BinaryData', binaryDataSchema);


module.exports = BinaryData;
