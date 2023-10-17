const { Location }  = require('../models');

const getAllLocations = async (req, res) => {
    try {
        const shirts = await Location.find()
        res.json(shirts)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function getOneLocation(req, res) {
    try {
        const id = req.params.id
        const shirt = await Location.findById(id)
        if (shirt) {
            return res.json(shirt)
        }
        return res.status(404).send('Location with this id doesnt exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createLocation(req,res) {
    try {
        const shirt = await new Location (req.body)
        await shirt.save()
        return res.status(201).json({
            shirt
        })
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}


async function updateLocation(req,res) {
    try {
        const id = req.params.id
        const shirt = await Location.findByIdAndUpdate(id, req.body, {new: true})
        if (shirt) {
            return res.status(200).json(Location)
        }
        throw new Error('Location not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}

async function deleteLocation(req,res) {
    try {
        const id = req.params.id
        const shirt =  await Location.findByIdAndDelete(id)
        if (shirt) {
            return res.status(200).json(Location)
        }
        throw new Error('Location not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}


module.exports = {
    getAllLocations,
    getOneLocation,
    createLocation,
    updateLocation,
    deleteLocation
}