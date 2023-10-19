const { Schema } = require('mongoose');

const locationSchema = new Schema({
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String },
    contractAddress: { type: String }, 
}, { timestamps: true });

module.exports = locationSchema;
