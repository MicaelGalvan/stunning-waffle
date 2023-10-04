const { httpError } = require('../helpers/handleError')
const MedicalHistory = require('../models/medicalHistory')

const list = async (req, res) => {
    try {
        const MedicalHistories = await MedicalHistory.find();
        res.json(MedicalHistories);
    } catch (err) {
        httpError(res, err)
    }
}

const get = async (req, res) => {
    try {
        const medicalHistory = await MedicalHistory.findById(req.params.id);
        if (!medicalHistory) {
            return res.status(404).json({ error: 'Medical History not found' });
        }
        res.json(medicalHistory);
    } catch (err) {
        httpError(res, err)
    }
}

const remove = async (req, res) => {
    try {
        const medicalHistory = await MedicalHistory.findByIdAndDelete(req.params.id);
        if (!medicalHistory) {
            return res.status(404).json({ error: 'Medical History not found' });
        }
        res.json(medicalHistory);
    } catch (err) {
        httpError(res, err)
    }
}

const create = async (req, res) => {
    try {
        // const { name, price, durationMinutes, status } = req.body;
        const medicalHistory = new MedicalHistory(req.body);
        await MedicalHistory.save();
        res.status(201).json(medicalHistory);
    } catch (err) {
        httpError(res, err)
    }
}

const update = async (req, res) => {
    try {
        const { name, price, durationMinutes, status } = req.body;
        const medicalHistory = await MedicalHistory.findByIdAndUpdate(req.params.id, { name, price, durationMinutes, status }, { new: true });
        if (!medicalHistory) {
            return res.status(404).json({ error: 'Medical History not found' });
        }
        res.json(medicalHistory);
    } catch (err) {
        httpError(res, err)
    }
}
module.exports = { list, get, remove, create, update }