<?php
// Configurações do Banco de Dados
$host = "191.252.201.159"; // Pode ser o IP da VPS
$dbname = "chamasenha";
$user = "root";
$password = "Ch@maS&nha2025"; // Coloque a senha do banco aqui

try {
    // Criando a conexão com PDO
    $pdo = new PDO("pgsql:host=$host;dbname=$dbname", $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Erro na conexão com o banco de dados: " . $e->getMessage());
}
?>
