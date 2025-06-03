<?php
require "db.php"; // Inclui a conexão ao banco

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST, GET");

// Criar Usuário para um Cliente (Empresa)
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $dados = json_decode(file_get_contents("php://input"), true);

    if (!empty($dados["cliente_id"]) && !empty($dados["nome"]) && !empty($dados["email"]) && !empty($dados["senha"])) {
        // Hash da senha para segurança
        $senha_hash = password_hash($dados["senha"], PASSWORD_DEFAULT);

        $sql = "INSERT INTO usuarios (cliente_id, nome, email, senha) VALUES (:cliente_id, :nome, :email, :senha)";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([
            ":cliente_id" => $dados["cliente_id"],
            ":nome" => $dados["nome"],
            ":email" => $dados["email"],
            ":senha" => $senha_hash
        ]);

        echo json_encode(["status" => "success", "message" => "Usuário cadastrado com sucesso!"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Dados incompletos!"]);
    }
}

// Listar Usuários de um Cliente
if ($_SERVER["REQUEST_METHOD"] === "GET" && isset($_GET["cliente_id"])) {
    $sql = "SELECT id, nome, email, criado_em FROM usuarios WHERE cliente_id = :cliente_id";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([":cliente_id" => $_GET["cliente_id"]]);
    $usuarios = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($usuarios);
}
?>
