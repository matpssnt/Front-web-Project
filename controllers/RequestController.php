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

    public static function update($conn, $id, $data){
        $result = PedidoModel::update($conn, $id, $data);
        if($result){
            return jsonResponse(['message'=> 'Pedido atualizado']);
        } else{
            return jsonResponse(['message'=> 'DNão foi possivel atualizar o pedido'], 400);
        }
    }

    public static function delete($conn, $id) {
        $result = PedidoModel::delete($conn, $id);
         if($result){
            return jsonResponse(['message'=> 'Pedido excluído']);
        } else{
            return jsonResponse(['message'=> ''], 400);
        }
    }

}

?>