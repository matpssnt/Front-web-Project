<?php

require_once __DIR__ . "/../controllers/ValidateController.php";
require_once __DIR__ ."/../models/OrderModel.php";
class OrderController {

    public static function createOrder($conn, $data) {
        $data["usuario_id"] = isset($data["usuario_id"]) ? $data["usuario_id"] : null;

        ValidateController::validate_data($data, ["cliente_id", "pagamento", "quartos"]);

        foreach ($data["quartos"] as $quarto) {
            ValidateController::validate_data($quarto, ["id", "inicio", "fim"]);
        }

        if (count($data["quartos"]) == 0) {
            return jsonResponse(["message"=>'Não existe reserva'], 400);
        }


        //OrderModel::orderReserve($conn, $data);

    }
}

?>