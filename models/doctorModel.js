const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
          firstname: {
            type: 'text',
            required: true
          },
          lastname: {
            type: 'text',
            required: true
          },
          bio: {
            type: 'text'
          },
          city: {
            type: 'text',
            required: true
          },
          state: {
            type: 'text',
            required: true
          },
          languages: {
            type: 'text'
          },
          services: {
            type: 'text'
          },
          mobilenumber: {
            type: 'text',
            required: true
          },
          email: {
            type: 'text',
            required: true,
            unique: true,
            max: 50,
          },
          socialMedia: {
            type: 'text'
          },
          specialization: {
            type: 'text',
            required: true
          },
          experience: {
            type: 'number',
            required: true
          },
          qualifications: {
            type: 'text',
            required: true
          },
          expertise: {
            type: 'text'
          },
          clinicHospital: {
            type: 'text',
            required: true
          },
          registrationNumber: {
            type: 'text',
            required: true
          },
        
});
      
module.exports = mongoose.model("Doctors", doctorSchema);