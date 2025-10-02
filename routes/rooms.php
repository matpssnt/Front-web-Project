<?php

require_once __DIR__ . "/../controllers/RoomController.php";

$method = $_SERVER['REQUEST_METHOD'];
$resource = $segments[3] ?? null;
$param = $segments[2] ?? null;

switch ($method) {
    case "GET":
        if ($param === 'disponiveis') {
            $inicio = isset($_GET['inicio']) ? $_GET['inicio'] : null;
            $fim = isset($_GET['fim']) ? $_GET['fim'] : null;
            $capacidade = isset($_GET['capacidade']) ? $_GET['capacidade'] : null;

            if ($inicio && $fim && $capacidade) {
                $data = ['inicio' => $inicio, 'fim' => $fim, 'capacidade' => $capacidade];
                $resultados = RoomController::searchDisp($conn, $data);
                jsonResponse(["message" => "quartos disponiveis",
                "data" => $resultados]);
            } else {
                jsonResponse(["message" => "Parâmetros 'inicio' e 'fim' são obrigatórios."], 400);
            }
        } 
        elseif ($param) {
            RoomController::getById($conn, $param);
        } 
        else {
            RoomController::getAll($conn);
        }
        break;

    case "DELETE":
        $id = $segments[2] ?? null;

        if ($id) {
            RoomController::delete($conn, $id);
        } else {
            jsonResponse(["message" => "Id necessário!"], 400);
        }
        break;

    case "POST":
        $data = json_decode(file_get_contents('php://input'), true);
        RoomController::create($conn, $data);
        break;

    case "PUT":
        $data = json_decode(file_get_contents('php://input'), true);
        $id = $data['id'] ?? null;

        if ($id) {
            RoomController::update($conn, $id, $data);
        } 
        else {
            jsonResponse(["message" => "Id necessário no corpo da requisição!"], 400);
        }
        break;

    default:
        jsonResponse([
            "status" => "erro",
            "message" => "Método não permitido"
        ], 405);
        break;
}

?>