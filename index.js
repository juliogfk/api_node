/*
ANTES TODOS OS CÓDIGOS DE ROUTES ESTAVAM AQUI.
AGORA O INDEX.JS FICA RESPONSÁVEL PELO SERVIDOR 
E ROUTES PELA ROTAS.
APÓS ISSO PODEMOS ADICIONAR NOVAS ROTAS.
*/

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser') 
//ARQUIVO CRIADO APÓS O ROUTES.
const routes = require('./config/routes')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(21262, () => {
    console.log('Express started at http://localhost:21262')
})