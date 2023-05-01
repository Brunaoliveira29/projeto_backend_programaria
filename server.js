const express = require("express")

const app = express()
const porta = 3333

function monstraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.listen(porta, monstraPorta)