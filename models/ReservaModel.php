<?php

class ReservaModel {

    public static function getAll($conn) {
        $sql = "SELECT * FROM reservas";
        $result = $conn->query($sql);
        return $result->fetch_all(MYSQLI_ASSOC);
    }

    public static function getById($conn, $id) {
        $sql = "SELECT * FROM reservas WHERE id= ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $id);
        $stmt->execute();
        return $stmt->get_result()->fetch_assoc();
    }

    public static function create($conn, $data) {
        $sql = "INSERT INTO reservas (pedido_id, quarto_id, adicional_id, fim, inicio) 
        VALUES (?, ?, ?, ?, ?);";
        
        $stat = $conn->prepare($sql);
        $stat->bind_param("iiiss", 
            $data['pedido_id'],
            $data["quarto_id"],
            $data["adicional_id"],
            $data["fim"],
            $data["inicio"]
        );
        return $stat->execute();
    }

    public static function 

}

?>