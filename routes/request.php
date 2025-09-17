<?php

require_once __DIR__ . "/../controllers/RequestController.php";

if ( $_SERVER['REQUEST_METHOD'] === "GET") {
    $id = $segments[1] ?? null;

    if (isset($id) === null) {
        RequestController::getAll($conn);
    }
    else  {
        RequestController::getById($conn, $id);
    }
    
}

elseif ($_SERVER['REQUEST_METHOD'] === "POST") {
    $data = json_decode(file_get_contents('php://input'), true);
    RequestController::create($conn, $data);
}

elseif ($_SERVER['REQUEST_METHOD'] === "DELETE") {
    $id = $segments[1] ?? null;
    
    if (isset($id)) {
        RequestController::delete($conn, $id);
    }
    else {
        jsonResponse([
        "message" => 'Você não conseguiu excluir'
        ], 400);
    }
}

elseif ($_SERVER['REQUEST_METHOD'] === "PUT") {
    $data = json_decode(file_get_contents('php://input'), true);
    $id = $data["id"];

    RequestController::update($conn, $id, $data);
    
}

else {
    jsonResponse([
        "status" => 'erro',
        "message" => 'Método não permitido'
    ], 405);
}

?>