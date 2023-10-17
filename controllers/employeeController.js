const { Employee }  = require('../models');

const getAllEmployees = async (req, res) => {
    try {
        const shirts = await Employee.find()
        res.json(shirts)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function getOneEmployee(req, res) {
    try {
        const id = req.params.id
        const shirt = await Employee.findById(id)
        if (shirt) {
            return res.json(shirt)
        }
        return res.status(404).send('Employee with this id doesnt exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createEmployee(req,res) {
    try {
        const shirt = await new Employee (req.body)
        await shirt.save()
        return res.status(201).json({
            shirt
        })
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}


async function updateEmployee(req,res) {
    try {
        const id = req.params.id
        const shirt = await Employee.findByIdAndUpdate(id, req.body, {new: true})
        if (shirt) {
            return res.status(200).json(Employee)
        }
        throw new Error('Employee not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}

async function deleteEmployee(req,res) {
    try {
        const id = req.params.id
        const shirt =  await Employee.findByIdAndDelete(id)
        if (shirt) {
            return res.status(200).json(Employee)
        }
        throw new Error('Employee not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}


module.exports = {
    getAllEmployees,
    getOneEmployee,
    createEmployee,
    updateEmployee,
    deleteEmployee
}