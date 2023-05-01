const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
response.json({
    nome: 'Bruna Oliveira',
    imagem: 'https://www.instagram.com/p/CrHVAb9usau/?utm_source=ig_web_copy_link',
    minibio: 'Desenvolvedora e instrutora'
})
}

function monstraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, monstraPorta)