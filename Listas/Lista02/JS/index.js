const express = require('express')
const app = express()
const porta = 5000

let produtos = [
    {
        nome: "Grand theft auto v",
        valor: 129.99,
        descricao: "Aqui você pode fazer de tudo!",
        imagem: "https://www.oficinadanet.com.br/imagens/post/45449/gtav-cheats.jpg",
    },
    {
        nome: "God Of War Ragnarok",
        valor: 99.99,
        descricao: "Jogo para aqueles apaixonados por ação e muita aventura",
        imagem: "https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png"
    }
]

app.get('/', (requisicao, resposta) => {
    try {
        return resposta.json(produtos).status(200)
    } catch (error) {
        return resposta.json({message: "Não é possível"}).status(400)
    }
})

app.get('/produtos', (req, res) => {
    return res.json({ nome: "GTA", valor: 129.99, descricao: "top", img: "https://www.oficinadanet.com.br/imagens/post/45449/gtav-cheats.jpg" }).status(200)
})

app.listen(porta, () => {
    console.log(`http://localhost:${porta}`)
})