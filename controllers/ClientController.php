<?php

require_once __DIR__ . "/../models/ClienteModel.php";
require_once __DIR__ . "/../controllers/ValidateController.php";

class ClientController{
    public static function create($conn, $data) {

        $validacao = ValidateController::AuthClient($data);
        
        if (!$validacao['sucesso']) {
            return jsonResponse($validacao, 400);
        }


        $result = ClienteModel::create($conn, $data);
        
        if ($result) {
            return jsonResponse([
                'sucesso' => true,
                'message'=>'Cliente registrado com sucesso"'
            ]);
        }
        else {
            return jsonResponse([
                'sucesso' => false,
                'message'=>'Erro ao registrar o cliente!'
            ]);
        }
    }

    public static function getById($conn, $id) {
        $result = ClienteModel::getById($conn, $id);
        return jsonResponse($result);
    }

    public static function getAll($conn) {
        $result = ClienteModel::getAll($conn);
        return jsonResponse($result);
    }

    public static function delete($conn, $id) {
        $result = ClienteModel::delete($conn, $id);
         if($result){
            return jsonResponse(['message'=> 'Cliente excluído']);
        } else{
            return jsonResponse(['message'=> ''], 400);
        }
    }

    public static function update($conn, $id, $data){
        $result = ClienteModel::update($conn, $id, $data);
        if($result){
            return jsonResponse(['message'=> 'Cliente atualizado']);
        } else{
            return jsonResponse(['message'=> 'Deu merda'], 400);
        }
    }
}

?>