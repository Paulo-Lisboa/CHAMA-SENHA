const senhaAtual = document.getElementById("senha-atual");
const ultimasSenhas = document.getElementById("ultimas-senhas");
const inputSenha = document.getElementById("input-senha");

let senhasChamadas = JSON.parse(localStorage.getItem("ultimasSenhas")) || [];

function chamarSenha() {
    const novaSenha = inputSenha.value.trim();
    if (novaSenha) {
        // Atualiza o número da senha atual
        senhaAtual.textContent = novaSenha; // Exibe a senha sem o '#'

        // Atualiza as últimas senhas chamadas
        senhasChamadas.unshift(novaSenha);
        if (senhasChamadas.length > 3) {
            senhasChamadas.pop();
        }

        // Salva as últimas senhas chamadas no localStorage
        localStorage.setItem("ultimasSenhas", JSON.stringify(senhasChamadas));

        // Exibe as últimas senhas na tela
        updateUltimasSenhas();

        // Salva a última senha chamada no localStorage
        localStorage.setItem("senhaAtual", novaSenha);

        // Usa o Responsive Voice para falar a senha chamada
        responsiveVoice.speak(`Senha ${novaSenha}`, "Brazilian Portuguese Female");

        // Limpa o campo de entrada
        inputSenha.value = '';
    }
}

function updateUltimasSenhas() {
    // Atualiza a lista de últimas senhas chamadas
    ultimasSenhas.innerHTML = senhasChamadas.map(s => `<li>${s}</li>`).join('');
}

// Adicionando o ouvinte de evento para o pressionamento da tecla Enter
inputSenha.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        chamarSenha();
    }
});

function limparTela() {
    // Limpa o campo de entrada
    inputSenha.value = '';
    
    // Limpa a senha atual exibida
    senhaAtual.textContent = '';
    
    // Limpa as últimas senhas chamadas
    senhasChamadas = [];
    updateUltimasSenhas();
    localStorage.removeItem("senhaAtual"); // Remove a senha do localStorage
    localStorage.removeItem("ultimasSenhas"); // Remove as últimas senhas do localStorage
}

function deslogar() {
    window.location.href = "/index.html"; // Redireciona para a tela de login
}
function deslogar() {
    // Remove o estado de autenticação
    localStorage.removeItem("isAuthenticated");

    // Redireciona para a página de login
    window.location.href = "/index.html";
}
