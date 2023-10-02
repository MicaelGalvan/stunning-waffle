const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MedicalHistorySchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    medicalConsultationList: [{
        type: Schema.Types.ObjectId,
        ref: 'medicalConsultation'
    }]
});

const MedicalHistory = mongoose.model('medicalHistory', MedicalHistorySchema);

module.exports = MedicalHistory;
v