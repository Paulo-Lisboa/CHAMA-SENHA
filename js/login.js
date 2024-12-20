// Usuário e senha cadastrados previamente
const CREDENTIALS = {
    username: "admin", // Substitua pelo usuário desejado
    password: "123456" // Substitua pela senha desejada
};

const loginForm = document.getElementById("login-form");
const errorMessage = document.getElementById("error-message");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o envio do formulário padrão

    // Obtém os valores dos campos
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    // Valida as credenciais
    if (username === CREDENTIALS.username && password === CREDENTIALS.password) {
        // Redireciona para o sistema
        window.location.href = "home/index.html"; // Substitua pelo caminho da sua página de sistema
    } else {
        // Exibe mensagem de erro
        errorMessage.textContent = "Usuário ou senha incorretos!";
        errorMessage.style.display = "block";
    }
});
