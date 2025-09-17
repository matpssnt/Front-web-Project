<?php

require_once __DIR__ . "/../models/PedidoModel.php";

class RequestController{
    public static function create($conn, $data) {
        $result = PedidoModel::create($conn, $data);
        
        if ($result) {
            return jsonResponse(['message'=>'Pedido adicionado com sucesso"']);
        }
        else {
            return jsonResponse(['message'=>'Erro ao registrar o quarto!']);
        }
    }

    public static function getById($conn, $id) {
        $result = PedidoModel::getById($conn, $id);
        return jsonResponse($result);
    }

    public static function getAll($conn) {
        $result = PedidoModel::getAll($conn);
        return jsonResponse($result);
    }

}

?>