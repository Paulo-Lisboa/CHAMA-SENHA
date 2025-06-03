<?php
require "db.php"; // Inclui a conexão ao banco

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST, GET");

// Criar Cliente (empresa)
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $dados = json_decode(file_get_contents("php://input"), true);
    
    if (!empty($dados["nome"]) && !empty($dados["email"]) && !empty($dados["senha"])) {
        // Hash da senha para segurança
        $senha_hash = password_hash($dados["senha"], PASSWORD_DEFAULT);
        
        $sql = "INSERT INTO clientes (nome, email, senha) VALUES (:nome, :email, :senha)";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([
            ":nome" => $dados["nome"],
            ":email" => $dados["email"],
            ":senha" => $senha_hash
        ]);

        echo json_encode(["status" => "success", "message" => "Cliente cadastrado com sucesso!"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Dados incompletos!"]);
    }
}

// Listar Clientes
if ($_SERVER["REQUEST_METHOD"] === "GET") {
    $sql = "SELECT id, nome, email, criado_em FROM clientes";
    $stmt = $pdo->query($sql);
    $clientes = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($clientes);
}
?>
