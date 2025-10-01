<?php

require_once "PasswordController.php";

require_once __DIR__ . "/../models/ClienteModel.php";
require_once __DIR__ . "/../controllers/AuthController.php";
require_once __DIR__ . "/../helpers/token_jwt.php";


class ClientController{
    public static function create($conn, $data) {

    $login = [
        "email" => $data["email"];
        "password" => $data["senha"];
    ]

    $data['senha'] = PasswordController::generateHash($data['senha']);
    $result = ClienteModel::create($conn, $data);
        
        if ($result) {
            AuthController::loginClient($conn, $login);
        }
        else {
            return jsonResponse([
                'message'=>'Erro ao cadastrar cliente'], 400);
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

    public static function loginClient($conn, $data) {

        $data['email'] = trim($data['email']);
        $data['password'] = trim($data['password']);
 
        if (empty($data['email']) || empty($data['password'])) {
            return jsonResponse([
                "status" => "erro",
                "message" => "Preencha todos os campos!"
            ], 401);
        }
 
        $client = ClienteModel::clientValidation($conn, $data['email'], $data['password']);
        if ($client) {
            $token = createToken($client);
            return jsonResponse([ "token" => $token ]);
        } else {
            return jsonResponse([
                "status" => "erro",
                "message" => "Credenciais inválidas!"
            ], 401);
        }
    }
}

?>