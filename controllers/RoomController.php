<?php

require_once __DIR__ . "/../models/QuartoModel.php";
require_once __DIR__ ."/../models/PhotosModel.php";
require_once  "ValidateController.php";
require_once "UploadController.php";

class RoomController {
    
    public static function create($conn, $data) {
        $result = RoomModel::create($conn, ["nome", "numero", "qnt_cama_casal", "qnt_cama_solteiro", "preco", "disponivel"]);
        
        if ($result) {
            if ($data["fotos"]) {
                $pictures = UploadController::upload($data['fotos']);
                foreach ($pictures['saves'] as $name) {
                    $idPhoto = PhotosModel::create($conn, $name);
                    if ($idPhoto) {
                        PhotosModel::createRelationRoom($conn, $result, $idPhoto);
                    }
                }
            }
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

    public static function getAll($conn) {
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

    public static function update($conn, $id, $data) {
        $result = RoomModel::update($conn, $id, $data);
        if($result){
            return jsonResponse(['message'=> 'Room atualizado']);
        } else{
            return jsonResponse(['message'=> 'Deu merda'], 400);
        }
    }

    public static function searchDisp($conn, $data) {
        ValidateController::validate_data($data, ["inicio", "fim", "capacidade"]);
        
        $data['inicio'] = ValidateController::fix_dateHour($data["inicio"], 14);
        $data["fim"] = ValidateController::fix_dateHour($data["fim"], 12);

        $resultado = RoomModel::buscarDisponivel($conn, $data);
        if ($resultado !== false && !empty($resultado)) {
            return jsonResponse(['message'=>"quartos Disponiveis", 'Quartos'=> $resultado]);
            
        } else {
            return jsonResponse(['message'=>"Erro ao buscar quartos disponiveis"], 404); 
        }
    }
}
?>