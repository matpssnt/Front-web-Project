<?php

require_once __DIR__ . "/../controllers/ValidateController.php";
require_once __DIR__ ."/../models/OrderModel.php";
class OrderController {

    public static function create($conn, $data){
        return;
    }

    public static function getById($conn, $id){
        return;
    }

    public static function getAll($conn){
        return;
    }

    public static function update($conn, $data){
        return;
    }

    public static function delete($conn, $id){
        return;
    }
    public static function createOrder($conn, $data) {
        $data["usuario_id"] = isset($data["usuario_id"]) ? $data["usuario_id"] : null;

        ValidateController::validate_data($data, ["cliente_id", "pagamento", "quartos"]);

        foreach ($data["quartos"] as $quarto) {
            ValidateController::validate_data($quarto, ["id", "inicio", "fim"]);
            $quarto["inicio"] = ValidateController::fix_dateHour($quarto["inicio"], 14);
            $quarto["fim"] = ValidateController::fix_dateHour($quarto["fim"],12);
        }

        if (count($data["quartos"]) == 0) {
            return jsonResponse(["message"=>'Não existe reserva'], 400);
        }

        try {
            $resultado = OrderModel::createOrder($conn, $data);
            return jsonResponse(['message' => $resultado]);
        }
        catch (\Throwable $erro) {
            return jsonResponse(['message'=> $erro->getMessage()], 500);
        }
       

    }
}

?>