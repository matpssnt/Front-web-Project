<?php

require_once __DIR__ . "/../controllers/OrderController.php";

if ( $_SERVER['REQUEST_METHOD'] === "GET") {
    $opcao = $segments[2] ?? null;

    if ($opcao === null) {
        OrderController::getAll($conn);
    }
    else  {
        OrderController::getById($conn, $opcao);
    }
    
}

elseif ($_SERVER['REQUEST_METHOD'] === "POST") {
    $opcao = $segments[2] ?? null;
    $data = json_decode(file_get_contents('php://input'), true);

    if ($opcao == "reservation") {
        OrderController::createOrder($conn, $data);
    }
    else {
        OrderController::create($conn, $data);
    }
}

elseif ($_SERVER['REQUEST_METHOD'] === "DELETE") {
    $id = $segments[2] ?? null;
    
    if (isset($id)) {
        OrderController::delete($conn, $id);
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

    OrderController::update($conn, $id, $data);
    
}

else {
    jsonResponse([
        "status" => 'erro',
        "message" => 'Método não permitido'
    ], 405);
}

?>