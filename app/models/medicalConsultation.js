const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MedicalConsultationSchema = new Schema({
    patientUser: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    professionalUser: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    reasonForConsultation: { type: String },
    diagnosis: { type: String },
    indicatedTreatment: { type: String },
    prescription: { type: String },
    consultationRoom: { type: String },
    speciality: { type: Object },
    preclinical: { type: String },
    appointment: {
        date: { type: Date, },
        hour: { type: Number },
        minute: { type: Number },
    },
    notes: { type: String },
    status: { type: String }
});

const MedicalConsultation = mongoose.model('medicalConsultation', MedicalConsultationSchema);

module.exports = MedicalConsultation;