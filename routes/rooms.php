<?php

require_once __DIR__ . "/../controllers/RoomController.php";

if ( $_SERVER['REQUEST_METHOD'] === "GET") {
    $id = $segments[5] ?? null;

    if (isset($id) === null) {
        RoomController::getAll($conn);
    }
    else  {
        RoomController::getById($conn, $id);
    }
    
}
else {
    jsonResponse([
        "status" => 'erro',
        "message" => 'Método não permitido'
    ], 405);
}

?>