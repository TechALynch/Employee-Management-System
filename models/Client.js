const { Schema } = require('mongoose');

const clientSchema = new Schema({
    establishmentName: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    tel: { type: String },
    email: { type: String },
    contractAddress: { type: String },
    contractTotal: { type: Number },
}, { timestamps: true });

module.exports = clientSchema;



// const { Schema } = require('mongoose'); // Import Schema from mongoose

// const clientSchema = new Schema({
//     establishmentName: { type: String, required: true },
//     firstName: { type: String, required: true },
//     lastName: { type: String, required: true },
//     location: [{
//         type: mongoose.Schema.Types.ObjectId, // Add the correct import
//         ref: 'Location', // Update the reference to match the model name
//     }],
//     contractTotal: { type: Number },
// }, { timestamps: true });

// module.exports = clientSchema;
