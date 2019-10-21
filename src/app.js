const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express()

// connecto to db
// mongoose.connect('mongodb://@localhost/test', {useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect('mongodb://localhost/crud-mongo', {useNewUrlParser: true, useUnifiedTopology: true })
 .then( db => console.log('Db connected'))
 .catch( err => console.log(err));

// importing routes
const indexRoutes = require('./routes/index');


// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// middlewares express
app.use(morgan('dev')); //Ver peticiones al servidor
app.use(express.urlencoded({extends: false }) );
// Recibir datos que se envian desde vista html, hay que colocarlo para poder guardar datos
// Creo que el metodo router.get("/delete/:myId" funciona gracias al urlencoded


// routes
app.use('/', indexRoutes)


// starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
})
