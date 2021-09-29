const mongoose = require('mongoose');
mongoose.connect(process.env.URI, (err)=>{
    if (err) {
    return console.log('error en la conexion a la bd', err)
    }
    console.log('db connect')
})