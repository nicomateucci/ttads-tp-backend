 const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Biblioteca Schema de ta Fechas, numeros string booleanos
const TareaSchema = new Schema({
  titulo: String,
  descripcion: String,
  fecha: {
    type: Date,
    default: '1996/06/24'
  },
  estado: {
    type: Boolean,
    default: false
  }
});

// collections tareas
module.exports =  mongoose.model('tarea', TareaSchema);
