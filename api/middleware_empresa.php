<?php
function verificarEmpresa($pdo, $usuario_id, $empresa_id) {
    $sql = "SELECT empresa_id FROM usuarios WHERE id = :usuario_id";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([':usuario_id' => $usuario_id]);
    $resultado = $stmt->fetch(PDO::FETCH_ASSOC);
    
    if ($resultado['empresa_id'] != $empresa_id) {
        http_response_code(403);
        echo json_encode(["erro" => "Acesso não autorizado"]);
        exit;
    }
    
    return true;
}