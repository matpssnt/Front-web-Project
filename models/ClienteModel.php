<?php

class ClienteModel {

    public static function getAll($conn) {
        $sql = "SELECT * FROM clientes";
        $result = $conn->query($sql);
        return $result->fetch_all(MYSQLI_ASSOC);
    }

    public static function getById($conn, $id) {
        $sql = "SELECT * FROM clientes WHERE id= ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $id);
        $stmt->execute();
        return $stmt->get_result()->fetch_assoc();
    }

    public static function create($conn, $data) {
        $sql = "INSERT INTO clientes (login_id, nome, cpf, telefone, cargo_id) 
        VALUES (?, ?, ?, ?, ?);";
        
        $stat = $conn->prepare($sql);
        $stat->bind_param("isssi", 
            $data["login_id"],
            $data["nome"],
            $data["cpf"],
            $data["telefone"],
            $data["cargo_id"]
        );
        return $stat->execute();
    }

    public static function update($conn, $id, $data) {
        $sql = "UPDATE clientes SET login_id = ?, nome = ?, cpf = ?, telefone = ?, cargo_id = ? WHERE id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("isssii",
            $data["login_id"],
            $data["nome"],
            $data["cpf"],
            $data["telefone"],
            $data["cargo_id"],
            $id
        );
        return $stmt->execute();
    }

    public static function delete($conn, $id) {
        $sql = "DELETE FROM clientes WHERE id= ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $id);
        return $stmt->execute();
    }
}

?>