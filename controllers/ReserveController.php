<?php

require_once __DIR__ . "/../models/ReservaModel.php";

class ReserveController{
    public static function create($conn, $data) {

        

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