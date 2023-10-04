const { httpError } = require('../helpers/handleError')
const MedicalConsultation = require('../models/medicalConsultation')

const list = async (req, res) => {
    try {
        const medicalConsultations = await MedicalConsultation.find();
        res.json(medicalConsultations);
    } catch (err) {
        httpError(res, err)
    }
}

const get = async (req, res) => {
    try {
        const medicalConsultation = await MedicalConsultation.findById(req.params.id);
        if (!medicalConsultation) {
            return res.status(404).json({ error: 'Medical Consultation not found' });
        }
        res.json(medicalConsultation);
    } catch (err) {
        httpError(res, err)
    }
}

const remove = async (req, res) => {
    try {
        const medicalConsultation = await MedicalConsultation.findByIdAndDelete(req.params.id);
        if (!medicalConsultation) {
            return res.status(404).json({ error: 'Medical Consultation not found' });
        }
        res.json(medicalConsultation);
    } catch (err) {
        httpError(res, err)
    }
}

const create = async (req, res) => {
    try {
        // const { name, price, durationMinutes, status } = req.body;
        const medicalConsultation = new medicalConsultation(req.body);
        await MedicalConsultation.save();
        res.status(201).json(medicalConsultation);
    } catch (err) {
        httpError(res, err)
    }
}

const update = async (req, res) => {
    try {
        // const { name, price, durationMinutes, status } = req.body;
        const medicalConsultation = await MedicalConsultation.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!medicalConsultation) {
            return res.status(404).json({ error: 'Medical Consultation not found' });
        }
        res.json(medicalConsultation);
    } catch (err) {
        httpError(res, err)
    }
}
module.exports = { list, get, remove, create, update }