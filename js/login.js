document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    fetch('/API/login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: username,
            senha: password
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            // Armazena informações do usuário
            localStorage.setItem('isAuthenticated', 'true');
            localStorage.setItem('userId', data.usuario.id);
            localStorage.setItem('clienteId', data.usuario.cliente_id);
            localStorage.setItem('userName', data.usuario.nome);

            // Redireciona para o painel
            window.location.href = 'home/index.html';
        } else {
            errorMessage.textContent = data.message;
            errorMessage.style.display = 'block';
        }
    })
    .catch(error => {
        errorMessage.textContent = 'Erro na conexão com o servidor';
        errorMessage.style.display = 'block';
        console.error('Erro:', error);
    });
});