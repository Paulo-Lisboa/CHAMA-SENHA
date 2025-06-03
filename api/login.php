<?php
require 'vendor/autoload.php';
require 'config.php';
require 'db.php';

use Firebase\JWT\JWT;

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $dados = json_decode(file_get_contents("php://input"), true);

    if (!empty($dados["email"]) && !empty($dados["senha"])) {
        // Busca usuário e dados da empresa
        $sql = "SELECT u.id, u.nome, u.senha, u.empresa_id, 
                       e.nome as empresa_nome 
                FROM usuarios u
                INNER JOIN empresas e ON u.empresa_id = e.id 
                WHERE u.email = :email";
        
        $stmt = $pdo->prepare($sql);
        $stmt->execute([":email" => $dados["email"]]);
        $usuario = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($usuario && password_verify($dados["senha"], $usuario["senha"])) {
            // Gera payload do token
            $payload = [
                'exp' => time() + JWT_EXPIRATION_TIME,
                'usuario_id' => $usuario['id'],
                'empresa_id' => $usuario['empresa_id']
            ];

            // Gera token JWT
            $token = JWT::encode($payload, JWT_SECRET_KEY, 'HS256');

            echo json_encode([
                "status" => "success",
                "message" => "Login realizado com sucesso!",
                "token" => $token,
                "usuario" => [
                    "id" => $usuario["id"],
                    "nome" => $usuario["nome"],
                    "empresa_id" => $usuario["empresa_id"],
                    "empresa_nome" => $usuario["empresa_nome"]
                ]
            ]);
        } else {
            echo json_encode([
                "status" => "error", 
                "message" => "Credenciais inválidas!"
            ]);
        }
    } else {
        echo json_encode([
            "status" => "error", 
            "message" => "Dados incompletos!"
        ]);
    }
}
?>