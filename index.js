
const express = require('express');
//const helmet = require('helmet');
const morgan = require('morgan');
const conectardb = require('./connect');
const app = express();
conectardb()
//configuracion del puerto
const PORT =process.env.PORT || 4000;

//middlewares
//app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/',require('./routes/users.routes'));

app.listen(PORT, ()=>{console.log(`escuchando en el puerto: ${PORT}`)});