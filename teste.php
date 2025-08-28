<?php
require_once __DIR__ . "/controllers/AuthController.php";
require_once __DIR__ . "/controllers/PasswordController.php";

$data = [
    "email"=>"mateus@gmail.com",
    "password"=>"1234"
];

AuthController::login($conn, $data);

//echo PasswordController::generateHash($data['password']);

//$hash = '$2y$10$yRXXkkrnWQKRhl6kHupYpOk1jXjngUvxAh4aOB5bZNwK6ILU15fd2';

//echo '<br>';

//echo PasswordController::validateHash($data['password'], $hash);

?>