<?php
    require_once "PasswordController.php";

    require_once __DIR__ . "/../models/UserModel.php";
    require_once __DIR__ . "/../models/ClienteModel.php";
    require_once __DIR__ . "/../helpers/token_jwt.php";

    class AuthController {
        public static function loginUser($conn, $data) {
            $data['email'] = trim($data['email']);
            $data['password'] = trim($data['password']);

            //Confirmar se todos os campos estão vazios
            if (empty($data['email']) || empty($data['password'])) {
                return jsonResponse([
                    "status" => "Deu erro mané!",
                    "message" => "Preencha todos os campos!",
                ], 401);
            }
        
            $user = UserModel::verifUser($conn, $data['email'] , $data['password']);
            if ($user) {
                
                $token = createToken($user);
                return jsonResponse(["token" => $token ]);
            }

            else {
                jsonResponse([
                    "status"=>"Deu ruim men!",
                    "message"=>"Credenciais inválidas!"
                ], 401);
            }
        }

        public static function loginClient($conn, $data) {
            $data['email'] = trim($data['email']);
            $data['password'] = trim($data['password']);

            if (empty($data['email']) || empty($data['password'])) {
                return jsonResponse([
                    "status" => "XIIIIIIIIII",
                    "message" => "Preencha todos os campos!",
                ], 401);
            }

            $cliente = ClienteModel::clientValidation($conn, $data['email'] , $data['password']);
            if ($cliente) {
                
                $token = createToken($cliente);
                return jsonResponse(["token" => $token ]);
            }

            else {
                jsonResponse([
                    "status"=>"IIIIIIIIH!",
                    "message"=>"Credenciais inválidas!"
                ], 401);
            }
        }

    }

?>