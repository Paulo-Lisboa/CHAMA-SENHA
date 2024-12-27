<?php
// /var/www/html/api/senhas.php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$senhasFile = "senhas.json";
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents("php://input"), true);
    $senhas = json_decode(file_get_contents($senhasFile), true) ?? [];
    array_unshift($senhas, $input['senha']);
    if (count($senhas) > 4) {
        array_pop($senhas);
    }
    file_put_contents($senhasFile, json_encode($senhas));
    echo json_encode(["status" => "success"]);
} elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
    echo file_get_contents($senhasFile);
}
?>
