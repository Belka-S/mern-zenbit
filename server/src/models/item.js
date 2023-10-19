const { Schema, model } = require('mongoose');

const { mongooseError } = require('../utils');

const required = [true, 'Required field!'];

const itemSchema = new Schema(
  {
    name: { type: String, required },
    price: { type: String, required },
    ticket: { type: String, required },
    percent: { type: String, required },
    days: { type: String, required },
    sold: { type: String, required },
    imageUrl: { type: String, required },
    // owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  },
  { versionKey: false, timestamps: true },
);

// Change error status
itemSchema.post('save', mongooseError);

const Item = model('Item', itemSchema);

module.exports = { Item };
