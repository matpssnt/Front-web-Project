<?php
require_once "ValidateController.php";
require_once __DIR__ . "/../models/AdicionalModel.php";

class AdiciController{
    public static function create($conn, $data) {
        ValidateController::validate_data($data, ["nome", "preco"]);
        
        $result = AdicionalModel::create($conn, $data);
        
        if ($result) {
            return jsonResponse(['message'=>'Adicional(is) do pedido registrado com sucesso"']);
        }
        else {
            return jsonResponse(['message'=>'Erro ao registrar o adicional do pedido!']);
        }
    }

    public static function getById($conn, $id) {
        $result = AdicionalModel::getById($conn, $id);
        return jsonResponse($result);
    }

    public static function getAll($conn) {
        $result = AdicionalModel::getAll($conn);
        return jsonResponse($result);
    }

    public static function delete($conn, $id) {
        $result = AdicionalModel::delete($conn, $id);
         if($result){
            return jsonResponse(['message'=> 'Adicional(is) do pedido excluído']);
        } else{
            return jsonResponse(['message'=> ''], 400);
        }
    }

    public static function update($conn, $id, $data){
        $result = AdicionalModel::update($conn, $id, $data);
        if($result){
            return jsonResponse(['message'=> 'Adicional(is) do pedido atualizado']);
        } else{
            return jsonResponse(['message'=> 'Deu merda'], 400);
        }
    }
}

?>