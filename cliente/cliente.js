const senhaAtual = document.getElementById("senha-atual");
const ultimasSenhasLista = document.getElementById("ultimas-senhas-lista");

// Função para atualizar a senha atual
function atualizarSenhaAtual() {
    // Recupera a senha atual do localStorage
    const senha = localStorage.getItem("senhaAtual");
    if (senha) {
        senhaAtual.textContent = senha;  // Atualiza o texto da senha atual
    } else {
        senhaAtual.textContent = "Aguardando...";  // Exibe 'Aguardando...' se não houver senha
    }
}

// Função para atualizar a lista de últimas senhas
function atualizarUltimasSenhas() {
    // Recupera as últimas 3 senhas chamadas do localStorage
    const ultimasSenhas = JSON.parse(localStorage.getItem("ultimasSenhas")) || [];

    // Atualiza a lista de últimas senhas chamadas no DOM
    ultimasSenhasLista.innerHTML = ultimasSenhas.map(s => `<li>${s}</li>`).join('');
}

// Atualiza a senha atual e a lista de últimas senhas a cada 5 segundos
setInterval(function() {
    atualizarSenhaAtual();
    atualizarUltimasSenhas();
}, 5000);

// Inicializa as senhas ao carregar a página
atualizarSenhaAtual();
atualizarUltimasSenhas();
