const mongoose = require('mongoose')
const employeeSchema = require('./employee')
const clientSchema = require('./client')
const locationSchema = require('./location')

const Employee = mongoose.model('Employee', employeeSchema)
const Client = mongoose.model('Client', clientSchema)
const Location = mongoose.model('Location', locationSchema)

module.exports = {
    Employee,
    Client,
    Location
}