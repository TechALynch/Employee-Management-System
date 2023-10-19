const { Location }  = require('../models');

const getAllLocations = async (req, res) => {
    try {
        const locations = await Location.find()
        res.json(locations)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function getOneLocation(req, res) {
    try {
        const id = req.params.id
        const location = await Location.findById(id)
        if (location) {
            return res.json(location)
        }
        return res.status(404).send('Location with this id doesnt exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createLocation(req,res) {
    try {
        const location = await new Location (req.body)
        await location.save()
        return res.status(201).json({
            location
        })
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}


async function updateLocation(req,res) {
    try {
        const id = req.params.id
        const location = await Location.findByIdAndUpdate(id, req.body, {new: true})
        if (location) {
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
        const location =  await Location.findByIdAndDelete(id)
        if (location) {
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