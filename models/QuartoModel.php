<?php

class RoomModel {

    public static function getAll($conn) {
        $sql = "SELECT * FROM quartos";
        $result = $conn->query($sql);
        return $result->fetch_all(MYSQLI_ASSOC);
    }

    public static function getById($conn, $id) {
        $sql = "SELECT * FROM quartos WHERE id= ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $id);
        $stmt->execute();
        return $stmt->get_result()->fetch_assoc();
    }

    public static function create($conn, $data) {
        $sql = "INSERT INTO quartos (nome, num, preco, qtd_cama_s, qtd_cama_c, disponivel) 
        VALUES (?, ?, ?, ?, ?, ?);";
        
        $stat = $conn->prepare($sql);
        $stat->bind_param("sidiii", 
            $data['nome'],
            $data["num"],
            $data["preco"],
            $data["qtd_cama_s"],
            $data["qtd_cama_c"],
            $data['disponivel']
        );
        return $stat->execute();
    }

    public static function update($conn, $id, $data) {
        $sql = "UPDATE quartos SET nome = ?, num = ?, preco = ?, qtd_cama_s = ?, qtd_cama_c = ?, disponivel = ? WHERE id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("siiidii",
            $data["nome"],
            $data["num"],
            $data["preco"],
            $data["qtd_cama_s"],
            $data["qtd_cama_c"],
            $data["disponivel"],
            $id
        );
        return $stmt->execute();
    }

    public static function delete($conn, $id) {
        $sql = "DELETE FROM quartos WHERE id= ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $id);
        return $stmt->execute();
    }

    public static function buscarDisponivel($conn) {

    }
}

?>