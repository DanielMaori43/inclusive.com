document.addEventListener('DOMContentLoaded', function () {
    const copiar = document.getElementById('copiar');
    const feedback = document.getElementById('feedback');
    const campoColar = document.getElementById('campo-colar');
    const textoCopiado = document.getElementById('texto-copiado').textContent;
    const verificarBtn = document.getElementById('verificar-cola');
    const nextBtn = document.getElementById('nextBtn');

    copiar.addEventListener('click', function () {
        navigator.clipboard.writeText(textoCopiado).then(function () {
            showFeedback("Texto copiado com sucesso! Agora cole abaixo.");
        }).catch(function (err) {
            console.error('Erro ao copiar o texto: ', err);
            showFeedback("Desculpe, ocorreu um erro ao tentar copiar o texto.");
        });
    });

    verificarBtn.addEventListener('click', function () {
        verificarCola();
    });

    function showFeedback(mensagem) {
        feedback.innerText = mensagem;
        campoColar.focus();
    }

    window.verificarCola = function () {
        const textoEsperado = "Texto para ser copiado! Selecione e copie este texto.";
        const textoColado = campoColar.value.trim();

        if (textoColado === textoEsperado) {
            feedback.innerText = "✅ Ótimo! Você colou o texto corretamente!";
            campoColar.style.border = "2px solid green";
            nextBtn.style.display = 'inline-block';
            nextBtn.disabled = false;
        } else {
            feedback.innerText = "❌ Ops! Parece que algo deu errado. Tente novamente.";
            campoColar.style.border = "2px solid red";
        }
    };

    window.nextModule = function () {
        // Você pode alterar aqui para o link real do próximo módulo
        window.location.href = "modulo2.html"; 
    };

    // Exemplo opcional: adicionar um link externo ao final da página após concluir
    function mostrarLink() {
        const link = document.createElement('p');
        link.innerHTML = 'Para acessar sua aplicação, clique aqui: <a href="https://inclusive-com-1.onrender.com/curso" target="_blank">Acesse o curso</a>';
        document.body.appendChild(link);
    }

    // Chame mostrarLink() se quiser mostrar esse link após a conclusão
});
