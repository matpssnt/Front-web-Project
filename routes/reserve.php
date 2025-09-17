<?php

require_once __DIR__ . "/../controllers/ReserveController.php";

if ( $_SERVER['REQUEST_METHOD'] === "GET") {
    $id = $segments[5] ?? null;

    if (isset($id) === null) {
        ReserveController::getAll($conn);
    }
    else  {
        ReserveController::getById($conn, $id);
    }
    
}

elseif ($_SERVER['REQUEST_METHOD'] === "POST") {
    $data = json_decode(file_get_contents('php://input'), true);
    ReserveController::create($conn, $data);
}

else {
    jsonResponse([
        "status" => 'erro',
        "message" => 'Método não permitido'
    ], 405);
}

?>