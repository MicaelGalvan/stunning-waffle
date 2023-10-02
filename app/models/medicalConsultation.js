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
    reason_for_consultation: { type: String },
    diagnosis: { type: String },
    indicated_treatment: { type: String },
    prescription: { type: String },
    consultation_room: { type: String },
    speciality: {
        type: Schema.Types.ObjectId,
        ref: 'speciality'
    },
    preclinical: { type: String },
    appointment_date: {
        type: Date,
        required: true
    },
    appointment_hour: { type: Number },
    appointment_minute: { type: Number },
    duration_minutes: { type: Number },
    notes: { type: String },
    status: { type: String }
});

const MedicalConsultation = mongoose.model('medicalConsultation', MedicalConsultationSchema);

module.exports = MedicalConsultation;
