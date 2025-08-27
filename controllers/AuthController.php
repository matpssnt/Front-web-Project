<?php

    require_once __DIR__ . "../models/UserModel.php";
    require_once __DIR__ . "../controllers/AuthController.php";

    class AuthController {
        public static function login($conn, $data) {
            $data['email'] = trim($data['email']);
            $data['password'] = trim($data['password']);

            //Confirmar se todos os campos estão vazios
            if (empty($data['email'] || ['password'])) {
                return jsonResponse([
                    "status" => "Deu erro mané!",
                    "message" => "Preencha todos os campos!"
                ], 401);
            }
        
            $user = UserModel::verifUser($conn, "mateus@gmail.com", "1234");
    
            if ($user) {
                return jsonResponse([
                    "id"=>$user['id'],
                    "nome"=>$user['nome'],
                    "email"=>$user['email'],
                    "cargo"=>$user['cargo_id']
                ]);
            }

            else {
                jsonResponse([
                    "status"=>"Deu ruim men!",
                    "message"=>"Credenciais inválidas!"
                ], 401);
            }
        } 
    }

?>