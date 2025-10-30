<?php

require_once __DIR__ . "/../controllers/ValidateController.php";
require_once __DIR__ ."/../models/OrderModel.php";
class OrderController {

    public static function create($conn, $data){
         ValidateController::validate_data($data, ["usuario_id", "cliente_id",  "data",  "pagamento"]);

        $result = OrderModel::create($conn, $data);
        
        if ($result) {
            return jsonResponse(['message'=>'Pedido adicionado com sucesso"']);
        }
        else {
            return jsonResponse(['message'=>'Erro ao registrar o quarto!']);
        }
    }

    public static function getById($conn, $id){
        $result = OrderModel::getById($conn, $id);
        return jsonResponse($result);
    }

    public static function getAll($conn){
        $result = OrderModel::getAll($conn);
        return jsonResponse($result);
    }

    public static function update($conn, $data, $id){
        $result = OrderModel::update($conn, $data, $id);
        if($result){
            return jsonResponse(['message'=> 'Pedido atualizado']);
        } else{
            return jsonResponse(['message'=> 'DNão foi possivel atualizar o pedido'], 400);
        }
    }

    public static function delete($conn, $id){
        $result = OrderModel::delete($conn, $id);
         if($result){
            return jsonResponse(['message'=> 'Pedido excluído']);
        } else{
            return jsonResponse(['message'=> ''], 400);
        }
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