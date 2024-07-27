const http = require ('http')
const port = 5000 

const produto = [
    { nome: 'bolu de borango', valor: 1000000 },
    { nome: 'bolu de chocolate', valor: 300 },
]
const requestHandler = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.write(JSON.stringify(produto))
    return res.end()
}

const server = http.createServer(requestHandler)

server.listen(port, () => {
    console.log('Servidor rodando na porta 5000')
})

