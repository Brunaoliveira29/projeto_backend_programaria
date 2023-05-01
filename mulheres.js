const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Bruna Oliveira', 
        imagem: 'https://www.instagram.com/p/CrHVAb9usau/?utm_source=ig_web_copy_link',
        minibio: 'Desenvolvedora e Instrutora'
    },

    {
        nome: 'Iana Chan',
        imagem: '',
        minibio: 'Fundadora da PrograMaria'
    },

    {
        nome: 'Nina da Hora',
        imagem: '',
        minibio: 'Hacker antirracista'
    }

]

function mostraMulheres(request, response) {
    response.json(mulheres)

}

function monstraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, monstraPorta)