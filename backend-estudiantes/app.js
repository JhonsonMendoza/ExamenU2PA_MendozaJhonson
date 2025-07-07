const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/gestion_academica', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const estudiantesRouter = require('./routes/estudiantes');
app.use('/api/estudiantes', estudiantesRouter);

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
