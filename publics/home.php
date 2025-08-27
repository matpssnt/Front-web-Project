<?php
    require_once "../config/db.php";
    require_once "../controllers/AuthController.php";

    $title = "Home";
    //require_once 'utils/cabecalho.php';

    $data = [
        "email"=>"mateus@gmail.com",
        "password"=>"1234"
    ];

    AuthController::login($conn, $data);
?>

    <h1>HOME?</h1>  

<?php
    require_once 'utils/rodape.php';
?>

