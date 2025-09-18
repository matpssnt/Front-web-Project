<?php

require_once __DIR__ . "/controllers/AuthController.php";
require_once __DIR__ . "/controllers/PasswordController.php";

require_once __DIR__ . "/controllers/ClientController.php";
require_once __DIR__ . "/controllers/RoomController.php";
require_once __DIR__ . "/controllers/ReserveController.php";
require_once __DIR__ . "/controllers/RequestController.php";
require_once __DIR__ . "/controllers/AdiciController.php";

require_once __DIR__ . "/helpers/token_jwt.php";

$data = [
    "login_id" => "Quarto do Código de Barra",
    "nome" => 1,
    "cpf" => 10.00,
    "telefone" => 1,
    "cargo_id" => 2,
    "disponivel" => 1
];

ClientController::getAll($conn);
//RoomController::getAll($conn);
//ReserveController::getAll($conn);
//RequestController::getAll($conn);
//AdiciController::getAll($conn);

//$data = [
//    "email"=>"mateus@gmail.com",
//    "password"=>"1234"
//];
//
//AuthController::login($conn, $data);

// echo PasswordController::generateHash($data['password']);

//$tokenInvalido = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJQb3Nzb25hdG8iLCJpYXQiOjE3NTY5MjM0MjYsImV4cCI6MTc1NjkyNzAyNiwic3ViIjp7ImlkIjoxLCJub21lIjoiTWF0ZXVzIiwiZW1haWwiOiJtYXRldXNAZ21haWwuY29tIiwiY2FyZ29faWQiOjF9fQ.3J2kk8Su4woOEu9XmMTzuwd58MpytXehAGhYhZRyJd8';
//echo validateToken($tokenInvalido);

//$tokenValido = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJQb3Nzb25hdG8iLCJpYXQiOjE3NTY5MzAxODUsImV4cCI6MTc1NjkzMzc4NSwic3ViIjp7ImlkIjoxLCJub21lIjoiTWF0ZXVzIiwiZW1haWwiOiJtYXRldXNAZ21haWwuY29tIiwiY2FyZ29faWQiOjF9fQ.yg2V88r_pkyMRXeFkLeDbnoKL6F-uTzTGETHvokTv6M';
//echo var_dump( validateToken($tokenValido) );

//$hash = '$2y$10$yRXXkkrnWQKRhl6kHupYpOk1jXjngUvxAh4aOB5bZNwK6ILU15fd2';

//echo '<br>';

//echo PasswordController::validateHash($data['password'], $hash);

?>