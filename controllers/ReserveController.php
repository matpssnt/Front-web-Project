<?php

require_once __DIR__ . "/../models/ReservaModel.php";
require_once __DIR__ . "/ValidateController.php";

class ReserveController{
    public static function create($conn, $data) {

        ValidateController::validate_data($data, ['pedido_id', 'quarto_id', 'adicional_id', 'fim', 'inicio']);

        $data['inicio'] = ValidateController::fix_dateHour($data['inicio'], 14);
        $data['fim'] = ValidateController::fix_dateHour($data['fim'], 12);

        $result = ReservaModel::create($conn, $data);
        
        if ($result) {
            return jsonResponse(['message'=>'Reserva registrada com sucesso"']);
        }
        else {
            return jsonResponse(['message'=>'Erro ao registrar a reserva!']);
        }
    }

    public static function getById($conn, $id) {
        $result = ReservaModel::getById($conn, $id);
        return jsonResponse($result);
    }

    public static function getAll($conn) {
        $result = ReservaModel::getAll($conn);
        return jsonResponse($result);
    }
}

?>