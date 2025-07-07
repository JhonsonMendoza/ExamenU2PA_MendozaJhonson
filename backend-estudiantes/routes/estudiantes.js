const express = require('express');
const router = express.Router();
const Estudiante = require('../models/Estudiante');

// GET todos los estudiantes
router.get('/', async (req, res) => {
  const estudiantes = await Estudiante.find();
  res.json(estudiantes);
});

// GET estudiante por cédula
router.get('/:cedula', async (req, res) => {
  const estudiante = await Estudiante.findOne({ cedula: req.params.cedula });
  if (!estudiante) return res.status(404).json({ mensaje: 'No encontrado' });
  res.json(estudiante);
});

// PUT actualizar por cédula
router.put('/:cedula', async (req, res) => {
  const actualizado = await Estudiante.findOneAndUpdate(
    { cedula: req.params.cedula },
    req.body,
    { new: true }
  );
  if (!actualizado) return res.status(404).json({ mensaje: 'No encontrado' });
  res.json(actualizado);
});

module.exports = router;
