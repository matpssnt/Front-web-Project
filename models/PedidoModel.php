<?php

class PedidoModel {

    public static function getAll($conn) {
        $sql = "SELECT * FROM pedidos";
        $result = $conn->query($sql);
        return $result->fetch_all(MYSQLI_ASSOC);
    }

    public static function getById($conn, $id) {
        $sql = "SELECT * FROM pedidos WHERE id= ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $id);
        $stmt->execute();
        return $stmt->get_result()->fetch_assoc();
    }

    public static function create($conn, $data) {
        $sql = "INSERT INTO pedidos (usuario_id, cliente_id, data_hora, pagamento) 
        VALUES (?, ?, ?, ?);";
        
        $stat = $conn->prepare($sql);
        $stat->bind_param("iiss", 
            $data["usuario_id"],
            $data["cliente_id"],
            $data["data_hora"],
            $data["pagamento"]
        );
        return $stat->execute();
    }

}

?>