const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SpecialitySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    durationMinutes: {
        type: Number,
        required: true
    }
});

const Speciality = mongoose.model('speciality', SpecialitySchema);

module.exports = Speciality;
