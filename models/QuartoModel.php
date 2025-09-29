<?php

class RoomModel {

    public static function getAll($conn) {
        $sql = "SELECT * FROM quartos;";
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
        $sql = "INSERT INTO quartos (nome, numero, qnt_cama_casal, qnt_cama_solteiro, preco, disponivel) 
        VALUES (?, ?, ?, ?, ?, ?);";
        
        $stat = $conn->prepare($sql);
        $stat->bind_param("ssiidi", 
            $data['nome'],
            $data["numero"],
            $data["qnt_cama_casal"],
            $data["qnt_cama_solteiro"],
            $data["preco"],
            $data['disponivel']
        );
        return $stat->execute();
    }

    public static function update($conn, $id, $data) {
        $sql = "UPDATE quartos SET nome = ?, numero = ?, qnt_cama_casal = ?, qnt_cama_solteiro = ?, preco = ?, disponivel = ? WHERE id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ssiidii",
            $data["nome"],
            $data["numero"],
            $data["qnt_cama_casal"],
            $data["qnt_cama_solteiro"],
            $data["preco"],
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

    public static function buscarDisponivel($conn, $data) {
        $sql = "SELECT *
        FROM quartos
        WHERE quartos.disponivel = 1
        AND (quartos.qnt_cama_casal * 2 + quartos.qnt_cama_solteiro) >= ?
        AND quartos.id NOT IN (
            SELECT reservas.quarto_id
            FROM reservas
            WHERE NOT (reservas.fim <= ? AND reservas.inicio >= ?));";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("iss",
            $data['qnt'],
            $data['inicio'],
            $data['fim']
        );
        $stmt->execute();
        return $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    }
}

?>