const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public'))); // onde estão seus HTML/JS/CSS

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});



copiar.addEventListener('click', function() {
    const textoCopiado = document.getElementById('texto-copiado').textContent; // Pegando o texto
    // Usando Clipboard API
    navigator.clipboard.writeText(textoCopiado).then(function() {
        showFeedback("Texto copiado com sucesso! Agora cole abaixo.");
    }).catch(function(err) {
        console.error('Erro ao copiar o texto: ', err);
        showFeedback("Desculpe, ocorreu um erro ao tentar copiar o texto.");
    });
});

function showFeedback(mensagem) {
    document.getElementById('feedback').innerText = mensagem;
    document.getElementById('campo-colar').focus();
}

function verificarCola() {
    const textoEsperado = "Texto para ser copiado! Selecione e copie este texto.";
    const textoColado = document.getElementById('campo-colar').value;

    if (textoColado === textoEsperado) {
        document.getElementById('feedback').innerText = "Ótimo! Você colou o texto corretamente!";
        document.getElementById('nextBtn').style.display = 'inline-block'; // Mostrar o botão de avançar
        document.getElementById('nextBtn').disabled = false;
    } else {
        document.getElementById('feedback').innerText = "Ops! Parece que algo deu errado. Tente novamente.";
    }
}

function nextModule() {
    alert("Parabéns! Você completou o módulo. Vamos para o próximo!");
}
