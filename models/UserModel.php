<?php

class UserModel {

    public static function verifUser($conn, $email, $password) {
        $sql = "SELECT usuario_id, usuario_nome, usuarrio_senha, cargos_nomes AS cargos FROM usuarios AS u JOIN roles ON cargos_id = u_cargo_id WHERE email = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($user = $result->fetch_assoc()) {
            if ($user['senha'] === $password) {
                unset($user['senha']);
                return $user;
            }
        }
        
        return false;

    }
}

?>