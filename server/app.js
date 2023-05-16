
const express = require('express');
const app = express();
const mongoose = require('mongoose')
const {MONGOURI} = require('./keys')
const PORT = 5000;

require('./models/user')
mongoose.model('User')

app.use(express.json())

app.use(require('./routes/auth'))


mongoose.connect(MONGOURI)
mongoose.connection.on('connected', ()=>{
    console.log('successfully connected to mongoose')
})
mongoose.connection.on('error', (err)=>{
    console.log('error while connecting to mongoose', err)
})

app.listen(PORT, () => {
    console.log('app is running on PORT', PORT)
})

