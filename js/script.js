const senhaAtual = document.getElementById("senha-atual");
const ultimasSenhas = document.getElementById("ultimas-senhas");
const inputSenha = document.getElementById("input-senha");

let senhasChamadas = [];

function chamarSenha() {
    const novaSenha = inputSenha.value.trim();
    if (novaSenha) {
        // Atualiza o número da senha atual
        senhaAtual.textContent = novaSenha; // Exibe a senha sem o '#'

        // Atualiza as últimas senhas chamadas
        senhasChamadas.unshift(novaSenha);
        if (senhasChamadas.length > 4) {
            senhasChamadas.pop();
        }
        
        // Exibe as últimas senhas na tela
        updateUltimasSenhas();

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
}
function deslogar() {
    window.location.href = "/login.html"; // Redireciona para a tela de login
}
