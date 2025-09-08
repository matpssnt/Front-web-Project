<?php

require_once __DIR__ . "/../models/QuartoModel.php";

class RoomController{
    public static function create($conn, $data) {
        $result = RoomModel::create($conn, $data);
        
        if ($result) {
            return jsonResponse(['message'=>'Quarto registrado com sucesso"']);
        }
        else {
            return jsonResponse(['message'=>'Erro ao registrar o quarto!']);
        }
    }
}

?>