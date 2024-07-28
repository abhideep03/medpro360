const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
        firstName: {
          type: 'text',
          required: true
        },
        lastName: {
          type: 'text',
          required: true
        },
        city: {
          type: 'text',
          required: true
        },
        state: {
          type: 'text',
          required: true
        },
        age: {
          type: 'number',
          required: true
        },
        occupation: {
          type: 'text',
          required: true
        },
        height: {
          type: 'number' // Consider using a specific unit like cm or inches
        },
        weight: {
          type: 'number' // Consider using a specific unit like kg or pounds
        },
        tobaccoUse: {
          type: 'boolean' // Or use options like 'yes', 'no', 'occasionally'
        },
        alcoholConsumption: {
          type: 'boolean' // Or use options like 'yes', 'no', 'occasionally'
        },
        caffeineConsumption: {
          type: 'boolean' // Or use options like 'yes', 'no', 'occasionally'
        },
        covidHistory: {
          type: 'boolean' // Or use options like 'yes', 'no', 'recovered'
        },
        bloodPressure: {
          type: 'text' // Consider using a specific format like '120/80'
        },
        sugarLevel: {
          type: 'number' // Consider specifying the unit like mg/dL or mmol/L
        },
        tuberculosisHistory: {
          type: 'boolean' // Or use options like 'yes', 'no', 'treated'
        },
        heartDiseaseHistory: {
          type: 'boolean' // Or use options like 'yes', 'no', 'controlled'
        },
        allergies: {
          type: 'text' // Consider using an array for multiple allergies
        },
        chronicIllnesses: {
          type: 'text' // Consider using an array for multiple illnesses
        },
        medications: {
          type: 'text' // Consider using an array for multiple medications
        },
        surgeries: {
          type: 'text' // Consider using an array for multiple surgeries
        }
      });
      

module.exports = mongoose.model("Patients", patientSchema);