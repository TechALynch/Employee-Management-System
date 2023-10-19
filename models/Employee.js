const { Schema } = require('mongoose');

const employeeSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    tel: { type: String },
    email: { type: String },
    address: { type: String },
    position: { type: String },
    locationPreference: { type: String },
    availability: { type: Boolean },
    hourlyPayRate: { type: Number },
}, { timestamps: true });

module.exports = employeeSchema;
