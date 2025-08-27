<?php
require_once __DIR__ . "../controllers/AuthController.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php:://input'), true);
    AuthController::login($conn, $data);
}
else {
jsonResponse([
    "status"=>"Erro!",
    "message"=>"Método não permitido!"
], 405) 
}


?>