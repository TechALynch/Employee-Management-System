const { Schema } = require('mongoose');

const clientSchema = new Schema({
    establishmentName: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    contractAddress: { type: String },
    contractTotal: { type: Number },
}, { timestamps: true });

module.exports = clientSchema;


// // models/client.js
// const mongoose = require('mongoose');

// const clientSchema = new mongoose.Schema({
//     establishmentName: String,
//     firstName: String,
//     lastName: String,
//     contractTotal: Number,
//     locations: [{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Location',
//     }],
// });

// const Client = mongoose.model('Client', clientSchema);

// module.exports = Client;

