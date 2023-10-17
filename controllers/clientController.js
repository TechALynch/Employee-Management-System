const { Client }  = require('../models');

const getAllClients = async (req, res) => {
    try {
        const shirts = await Client.find()
        res.json(shirts)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function getOneClient(req, res) {
    try {
        const id = req.params.id
        const shirt = await Client.findById(id)
        if (shirt) {
            return res.json(shirt)
        }
        return res.status(404).send('Client with this id doesnt exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createClient(req,res) {
    try {
        const shirt = await new Client (req.body)
        await shirt.save()
        return res.status(201).json({
            shirt
        })
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}


async function updateClient(req,res) {
    try {
        const id = req.params.id
        const shirt = await Client.findByIdAndUpdate(id, req.body, {new: true})
        if (shirt) {
            return res.status(200).json(Client)
        }
        throw new Error('Client not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}

async function deleteClient(req,res) {
    try {
        const id = req.params.id
        const shirt =  await Client.findByIdAndDelete(id)
        if (shirt) {
            return res.status(200).json(Client)
        }
        throw new Error('Client not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}


module.exports = {
    getAllClients,
    getOneClient,
    createClient,
    updateClient,
    deleteClient
}