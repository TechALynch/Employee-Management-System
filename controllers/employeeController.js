const { Employee }  = require('../models');

const getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find()
        res.json(employees)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function getOneEmployee(req, res) {
    try {
        const id = req.params.id
        const employee = await Employee.findById(id)
        if (employee) {
            return res.json(employee)
        }
        return res.status(404).send('Employee with this id doesnt exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createEmployee(req,res) {
    try {
        const employee = await new Employee (req.body)
        console.log(req.body)
        await employee.save()
        return res.status(201).json({
            employee
        })
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}


async function updateEmployee(req,res) {
    try {
        const id = req.params.id
        const employee = await Employee.findByIdAndUpdate(id, req.body, {new: true})
        if (employee) {
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
        const employee =  await Employee.findByIdAndDelete(id)
        if (employee) {
            return res.status(200).json(Employee)
        }
        throw new Error('Employee not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}

// const searchEmployeeByName = (req, res) => {
//     const { firstName, lastName } = req.query;
//     // Search for employees based on first and last name
//     const matchingEmployees = employees.filter(employee => {
//         return employee.firstName === firstName && employee.lastName === lastName;
//     });

//     if (matchingEmployees.length > 0) {
//         res.status(200).json(matchingEmployees);
//     } else {
//         res.status(404).json({ message: 'Employee not found' });
//     }
// };

//not working
async function getEmployeeByfName(req, res) {
    try {
        const firstName = req.params.firstName
        const employee = await Employee.findById(firstName)
        if (employee) {
            return res.json(employee)
        }
        return res.status(404).send('Employee with this id doesnt exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


module.exports = {
    getAllEmployees,
    getOneEmployee,
    createEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployeeByfName
}