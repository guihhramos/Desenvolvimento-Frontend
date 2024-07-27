let conteudoDiv = document.getElementById('conteudo')

fetch('http://localhost:5000', {
    method: "GET"
})
    .then((resposta) => resposta.jason)
    .then(dados => {
        for (dado of dados) {
            let paragrafo = document.createElement('p')
            paragrafo.textContent = dados.nome
            conteudoDiv.appendChild(paragrafo)
        }
    })
