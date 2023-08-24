const fs = require('fs') /* serve para criar arquivos e pastas*/

fs.readFile('arquivo.txt', 'utf8', (erro, dados) => {
    if(erro) {
        console.log(erro)
    }

    console.log(dados)
})

