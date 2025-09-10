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

    public static function getById($conn, $id) {
        $result = RoomModel::getById($conn, $id);
        return jsonResponse($result);
    }

    public static function listAll($conn) {
        $result = RoomModel::getAll($conn);
        return jsonResponse($result);
    }

    public static function delete($conn, $id) {
        $result = RoomModel::delete($conn, $id);
         if($result){
            return jsonResponse(['message'=> 'Quarto deletado']);
        } else{
            return jsonResponse(['message'=> ''], 400);
        }
    }

    public static function update($conn, $id, $data){
        $result = RoomModel::update($conn, $id, $data);
        if($result){
            return jsonResponse(['message'=> 'Roomatualizado']);
        } else{
            return jsonResponse(['message'=> 'Deu merda'], 400);
        }
    }
}

?>