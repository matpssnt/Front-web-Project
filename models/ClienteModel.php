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
        $sql = "INSERT INTO clientes (nome, email, telefone, cpf, cargo_id, senha) 
        VALUES (?, ?, ?, ?, ?, ?);";
        
        $stat = $conn->prepare($sql);
        $stat->bind_param("ssssis", 
            $data["nome"],
            $data["email"],
            $data["cpf"],
            $data["telefone"],
            $data["cargo_id"],
            $data["senha"],
        );
        return $stat->execute();
    }

    public static function update($conn, $id, $data) {
        $sql = "UPDATE clientes SET nome = ?, email = ?, telefone = ?, cpf = ?, cargo_id = ?, senha = ? WHERE id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ssssisi",
            $data["nome"],
            $data["cpf"],
            $data["email"],
            $data["telefone"],
            $data["cargo_id"],
            $data["senha"],
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