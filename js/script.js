const senhaAtual = document.querySelector("#senha-atual");
const ultimasSenhas = document.querySelector("#ultimas-senhas");
const inputSenha = document.querySelector("#input-senha");

// Recupera as últimas senhas do localStorage ou inicializa um array vazio
let senhasChamadas = JSON.parse(localStorage.getItem("ultimasSenhas")) || [];

function chamarSenha() {
    const novaSenha = inputSenha.value.trim(); // Remove espaços em branco extras

    if (novaSenha) { // Verifica se a senha não está vazia
        senhaAtual.textContent = novaSenha;

        // Adiciona a nova senha ao início do array
        senhasChamadas.unshift(novaSenha);

        // Mantém apenas as 3 últimas senhas
        if (senhasChamadas.length > 3) {
            senhasChamadas.pop(); // Remove o último elemento (o mais antigo)
        }

        // Salva as senhas atualizadas no localStorage
        localStorage.setItem("ultimasSenhas", JSON.stringify(senhasChamadas));
        localStorage.setItem("senhaAtual", novaSenha);

        // Usa o Responsive Voice para falar a senha
        responsiveVoice.speak(`Senha ${novaSenha}`, "Brazilian Portuguese Female");

        inputSenha.value = ''; // Limpa o campo de input
        updateUltimasSenhas(); // Atualiza a exibição das últimas senhas
    } else {
        const aviso = document.createElement("p");
        aviso.textContent = "⚠ Digite uma senha!";
        aviso.style.color = "red";
        inputSenha.insertAdjacentElement("afterend", aviso);
        setTimeout(() => aviso.remove(), 3000);

    }
}

function updateUltimasSenhas() {
    ultimasSenhas.innerHTML = ""; // Limpa a lista antes de adicionar os botões

    senhasChamadas.forEach(senha => {
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.textContent = senha;
        button.classList.add("senha-btn"); // Adiciona a classe para estilização

        // Adiciona o evento de clique ao botão
        button.addEventListener("click", function() {
            senhaAtual.textContent = senha;
            responsiveVoice.speak(`Senha ${senha}`, "Brazilian Portuguese Female");
            localStorage.setItem("senhaAtual", senha);
        });

        li.appendChild(button);
        ultimasSenhas.appendChild(li);
    });
}

// Ouvinte de evento para a tecla Enter no campo de input
inputSenha.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        chamarSenha();
    }
});

function limparTela() {
    inputSenha.value = '';
    senhaAtual.textContent = '';
    senhasChamadas = [];
    updateUltimasSenhas();
    localStorage.removeItem("senhaAtual");
    localStorage.removeItem("ultimasSenhas");
}

function deslogar() {
    localStorage.removeItem("isAuthenticated");
    window.location.href = "/index.html";
}

// Chamadas iniciais para exibir dados do localStorage ao carregar a página
updateUltimasSenhas();

const ultimaSenhaSalva = localStorage.getItem("senhaAtual");
if (ultimaSenhaSalva) {
    senhaAtual.textContent = ultimaSenhaSalva;
}