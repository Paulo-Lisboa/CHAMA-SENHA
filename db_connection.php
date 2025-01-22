<?php
// Conexão com o banco de dados
$servername = "localhost";
$username = "root";  // Substitua pelo seu nome de usuário do MySQL
$password = "";    // Substitua pela sua senha do MySQL
$dbname = "sistema_chamasenha";    // Nome do banco de dados que você criou

// Cria a conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}
?>
