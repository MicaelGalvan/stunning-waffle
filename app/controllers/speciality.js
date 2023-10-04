const { httpError } = require('../helpers/handleError')
const Speciality = require('../models/speciality')

const list = async (req, res) => {
    try {
        const specialities = await Speciality.find();
        res.json(specialities);
    } catch (err) {
        httpError(res, err)
    }
}

const get = async (req, res) => {
    try {
        const speciality = await Speciality.findById(req.params.id);
        if (!speciality) {
            return res.status(404).json({ error: 'Speciality not found' });
        }
        res.json(speciality);
    } catch (err) {
        httpError(res, err)
    }
}

const remove = async (req, res) => {
    try {
        const speciality = await Speciality.findByIdAndDelete(req.params.id);
        if (!speciality) {
            return res.status(404).json({ error: 'Speciality not found' });
        }
        res.json(speciality);
    } catch (err) {
        httpError(res, err)
    }
}

const create = async (req, res) => {
    try {
        const { name, price, durationMinutes, status } = req.body;
        const speciality = new Speciality({ name, price, durationMinutes, status });
        await Speciality.save();
        res.status(201).json(speciality);
    } catch (err) {
        httpError(res, err)
    }
}

const update = async (req, res) => {
    try {
        const { name, price, durationMinutes, status } = req.body;
        const speciality = await Speciality.findByIdAndUpdate(req.params.id, { name, price, durationMinutes, status }, { new: true });
        if (!speciality) {
            return res.status(404).json({ error: 'Speciality not found' });
        }
        res.json(speciality);
    } catch (err) {
        httpError(res, err)
    }
}
module.exports = { list, get, remove, create, update }