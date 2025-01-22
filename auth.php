<?php
require 'db_connection.php';

// Função para hashear a senha
function hashPassword($password) {
    return password_hash($password, PASSWORD_BCRYPT);
}

// Função para verificar a senha
function verifyPassword($password, $hash) {
    return password_verify($password, $hash);
}

// Função para autenticar o usuário
function authenticateUser($email, $password) {
    global $conn;
    $sql = "SELECT * FROM users WHERE email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();
    $user = $result->fetch_assoc();
    if ($user && verifyPassword($password, $user['password'])) {
        session_start();
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['store_id'] = $user['store_id'];
        return true;
    }
    return false;
}

// Exemplo de uso
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];
    
    if (authenticateUser($email, $password)) {
        echo "Autenticado com sucesso!";
    } else {
        echo "Falha na autenticação!";
    }
}
?>
