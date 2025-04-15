document.addEventListener('DOMContentLoaded', function() {
    const copiar = document.getElementById('copiar');
    const feedback = document.getElementById('feedback');
    const campoColar = document.getElementById('campo-colar');
    const textoCopiado = document.getElementById('texto-copiado').textContent; // Pegando o texto fixo para copiar

    copiar.addEventListener('click', function() {
        // Usando Clipboard API para copiar o texto
        navigator.clipboard.writeText(textoCopiado).then(function() {
            showFeedback("Texto copiado com sucesso! Agora cole abaixo.");
        }).catch(function(err) {
            console.error('Erro ao copiar o texto: ', err);
            showFeedback("Desculpe, ocorreu um erro ao tentar copiar o texto.");
        });
    });

    function showFeedback(mensagem) {
        feedback.innerText = mensagem;
        campoColar.focus();
    }

    function verificarCola() {
        const textoEsperado = "Texto para ser copiado! Selecione e copie este texto.";
        const textoColado = campoColar.value;

        if (textoColado === textoEsperado) {
            feedback.innerText = "Ótimo! Você colou o texto corretamente!";
            const nextBtn = document.getElementById('nextBtn');
            nextBtn.style.display = 'inline-block'; // Mostrar o botão de avançar
            nextBtn.disabled = false;
        } else {
            feedback.innerText = "Ops! Parece que algo deu errado. Tente novamente.";
        }
    }

    // Event listener para o botão de verificar
    document.getElementById('verificar-cola').addEventListener('click', verificarCola);

    // Função para avançar para o próximo módulo
    function nextModule() {
        alert("Parabéns! Você completou o módulo. Vamos para o próximo!");
    }
});
