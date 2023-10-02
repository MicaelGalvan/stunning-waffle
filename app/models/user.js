const mongoose = require('mongoose');
const Schema = mongoose.Schema

const UserSchema = Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    dni: {
        type: Number,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    role: {
        type: String,
        required: true,
    },
    category: {
        type: String,
    },
    gender: {
        type: String
    },
    address: {
        city: { type: String },
        country: { type: String },
        state: { type: String },
        street: { type: String },
        zipcode: { type: String }
    },
    phone: {
        type: String,
    },
    medicalHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: 'medicalHistory'
        }
    ],
    specialities: [
        {
            type: Schema.Types.ObjectId,
            ref: 'speciality'
        }
    ],
    medicalRegistrationNumber: {
        type: Number,
    },
    workdays: [
        {
            day: { type: String, },
            checkin: { type: Number, },
            checkout: { type: Number, }
        }
    ],
    status: {
        type: String
    }
},
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = mongoose.model('user', UserSchema)