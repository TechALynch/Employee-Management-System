const { Client }  = require('../models');

const getAllClients = async (req, res) => {
    try {
        const clients = await Client.find()
        res.json(clients)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function getOneClient(req, res) {
    try {
        const id = req.params.id
        const client = await Client.findById(id)
        if (client) {
            return res.json(client)
        }
        return res.status(404).send('Client with this id doesnt exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createClient(req,res) {
    try {
        const client = await new Client (req.body)
        await client.save()
        return res.status(201).json({
            client
        })
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}


async function updateClient(req,res) {
    try {
        const id = req.params.id
        const client = await Client.findByIdAndUpdate(id, req.body, {new: true})
        if (client) {
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
        const client =  await Client.findByIdAndDelete(id)
        if (client) {
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