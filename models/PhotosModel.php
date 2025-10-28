<?php

class PhotosModel {

    public static function getAll($conn) {
        $sql = "SELECT * FROM imagens";
        $result = $conn->query($sql);
        return $result->fetch_all(MYSQLI_ASSOC);
    }

    public static function getById($conn, $id) {
        $sql = "SELECT * FROM imagens WHERE id= ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $id);
        $stmt->execute();
        return $stmt->get_result()->fetch_assoc();
    }

    public static function getByRoomId($conn, $id) {
        $sql = "SELECT img.nome
        FROM imagens_quartos iq
        JOIN imagens img ON iq.imagem_id = img.id
        WHERE iq.quarto_id = ?";

        $stat = $conn->prepare($sql);
        $stat->bind_param("i", $id);
        $stat->execute();
        $result = $stat->get_result();
        $photos = [];

        while ( $row = $result->fetch_assoc()) {
            $photos[] = $row['nome'];
        }
        return $photos;
    }

    public static function create($conn, $data) {
        $sql = "INSERT INTO imagens (nome, tipo, caminho) 
        VALUES (?, ?, ?);";
        
        $stat = $conn->prepare($sql);
        $stat->bind_param("sss", 
            $data["name"],
            $data["type"],
            $data["path"]
        );
        if ($stat->execute()) {
            return $conn->insert_id;
        }
        return false;
    }

    public static function createRelationRoom($conn, $idRoom, $idPhoto) {
        $sql = "INSERT INTO imagens_quartos (imagem_id, quarto_id) VALUES (?, ?)";
        $stat = $conn->prepare($sql);
        $stat->bind_param("ii", $idRoom, $idPhoto);

        if ($stat->execute()) {
            return $conn->insert_id;
        }
        return false;
    }

    public static function update($conn, $id, $data) {
        $sql = "UPDATE pedidos SET usuario_id = ?, cliente_id = ?, data = ?, pagamento = ? WHERE id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("iissi",
            $data["usuario_id"],
            $data["cliente_id"],
            $data["data"],
            $data["pagamento"],
            $id
        );
        return $stmt->execute();
    }

    public static function delete($conn, $id) {
        $sql = "DELETE FROM imagens WHERE id= ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $id);
        return $stmt->execute();
    }
}
?>