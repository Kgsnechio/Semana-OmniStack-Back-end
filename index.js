const express = require('express')

const mongoose = require('mongoose')
const routes = require('./routes')

mongoose.connect('mongodb+srv://kgs_nechio:K_nechio9429@cluster0-ysi83.mongodb.net/test?retryWrites=true&w=majority', { 
    useNewUrlParser: true ,
    useUnifiedTopology: true
})

const app = express()
app.use(express.json()) // Define que todas as rotas da nossa aplicação sera no formato json
app.use(routes) // link de importação
app.listen(3333)