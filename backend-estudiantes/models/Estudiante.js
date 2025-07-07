const mongoose = require('mongoose');

const estudianteSchema = new mongoose.Schema({
  cedula: { type: String, unique: true },
  nombre: String,
  apellido: String,
  nivel: Number,
});

module.exports = mongoose.model('Estudiante', estudianteSchema);
