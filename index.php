<?php
require_once "config/db.php";
require_once "helpers/response.php";

if ($erroDB) {
    echo "Erro na conexão";
    exit;
}

$uri = Strtolower(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH));
$method = $_SERVER['REQUEST_METHOD'];

$baseFolder = Strtolower(basename(dirname(__FILE__)));
$uri = str_replace("/$baseFolder", "", $uri);
$segments = explode("/", trim($uri, "/"));


$route = $segments[0] ?? null;
$subRoute = $segments[1] ?? null;



if ($route != "api") {
    //require __DIR__ . "/publics/index.html";
    require "teste.php";
    exit;
}



//Back-end para rotas de requisão (endpoint)
elseif ($route === "api") {
    if (in_array($subRoute, ["login", "rooms", "client", "adic", "request", "reserve"])) {
        require "routes/${subRoute}.php";
    } else {
        return jsonResponse(['message'=>'Rota não encontrada'], 404);
        exit;
    }
    exit;

} else {
    echo "404 Página não encontrada";
    exit;
}

?>
