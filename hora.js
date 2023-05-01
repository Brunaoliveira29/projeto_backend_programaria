const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function monstraHora(request, response){
    const data = new Date()
    const hora = data.toLocaleTimeString('pt-BR')
    response.send(hora)
}

function monstraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/hora', monstraHora))
app.listen(porta, monstraPorta)