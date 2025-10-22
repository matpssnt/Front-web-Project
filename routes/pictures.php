<?php

require_once __DIR__ . "/../controllers/UploadController.php";

if ($_SERVER['REQUEST_METHOD'] === "POST") {
    $data = $_FILES['fotos'] ?? null;
    UploadController::upload($data);
}
else {
    jsonResponse([
        'status'=>'erro',
        'message'=> 'Método não permitido!'
    ], 405);
}

?>