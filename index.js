const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser') 


const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())

/*
DEPOIS DOS COMENTÁRIOS NO BLOCO DE NOTAS. COMEÇAR AQUI \/
Banco de dados em tempo de execução. 
Sempre que o nodemon modificar, ele será limpo. 
Os valores são para não precisar ficar colocando.
*/
let db = [
    { '1': { Nome: 'Cliente 1', Idade: '20' } },
    { '2': { Nome: 'Cliente 2', Idade: '20' } },
    { '3': { Nome: 'Cliente 3', Idade: '20' } }
]

/*
VAMOS USAR O HTTP(PROTOCOLO DE INTERNET)
FAREMOS 4 OPERAÇÕES: INSERIR(POST), MODIFICAR(PUSH), 
DELETAR(DELETE) E SELECIONAR(GET).
INSTALA O POSTMAN E COLOCA A URL DO LOCALHOST LÁ E APERTA SEND.
NO NAVEGADOR(COMO ESTAVA ANTES), NÃO SIMULA AS OPERAÇÕES.
O POSTMAN, SIMULA! \/
*/
// Buscar Dados
app.get('/', (req, res) => {
    return res.json(db)
})

/*
O MÉTODO POST, PRECISA POR PARÂMETRO, ENVIAR UMA INFORMAÇÃO.
POR ISSO O CONST(VARIÁVEL)
*/
// Inserir Dados
app.post('/add', (req, res) => {
    const body = req.body

    if(!body)
        return res.status(400).end()

    db.push(body)
    return res.json(body)
})


app.listen(21262, () => {
    console.log('Express started at http://localhost:21262')
})