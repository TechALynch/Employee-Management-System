const { Schema } = require('mongoose');

const locationSchema = new Schema({
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String },
    contractAddress: { type: String }, 
}, { timestamps: true });

module.exports = locationSchema;


// // models/location.js
// const mongoose = require('mongoose');

// const locationSchema = new mongoose.Schema({
//     city: String,
//     state: String,
//     country: String,
//     contractAddress: String,
// });

// const Location = mongoose.model('Location', locationSchema);

// module.exports = Location;
