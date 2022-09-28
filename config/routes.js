/*
ESTE ARQUIVO FOI CRIADO, POIS O INDEX.JS ESTÁ MUITO 
ATAREFADO E ISSO NÃO É BOM.
*/

const express = require('express')
const routes = express.Router()

/*
DEPOIS DOS COMENTÁRIOS NO BLOCO DE NOTAS. COMEÇAR AQUI \/
Banco de dados em tempo de execução. 
Sempre que o nodemon modificar, ele será limpo. 

*/
let db = [
    { '1': { Nome: 'Cliente 1', Idade: '20' } },
    { '2': { Nome: 'Cliente 2', Idade: '20' } },
    { '3': { Nome: 'Cliente 3', Idade: '20' } }
]

/*
VAMOS USAR O HTTP(PROTOCOLO DE INTERNET)
FAREMOS 4 OPERAÇÕES: INSERIR(POST), MODIFICAR(PUT), 
DELETAR(DELETE) E SELECIONAR(GET).
INSTALA O POSTMAN E COLOCA A URL DO LOCALHOST LÁ E APERTA SEND.
NO NAVEGADOR(COMO ESTAVA ANTES), NÃO SIMULA AS OPERAÇÕES.
O POSTMAN, SIMULA! \/
*/
// Buscar Dados
routes.get('/', (req, res) => {
    return res.json(db)
})

/*
O MÉTODO POST, PRECISA POR PARÂMETRO, ENVIAR UMA INFORMAÇÃO.
POR ISSO O CONST(VARIÁVEL)
*/
// Inserir Dados
routes.post('/add', (req, res) => {
    const body = req.body

    if(!body)
        return res.status(400).end()

    db.push(body)
    return res.json(body)
})
/*
VAI SER DELETADO PELO ID, PODE SE COLOCAR O NOME FICARIA: /:ID/:NAME
*/
routes.delete('/:id', (req, res)=> {
    const id = req.params.id

    let newDB = db.filter(item => {
        if (!item[id])
                return item
    })

    db = newDB

    return res.send(newDB)
})


module.exports = routes
