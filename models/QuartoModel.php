<?php

class RoomModel {

    public static function listarTodos($conn) {
        // $sql = "SELECT * FROM quartos = ?";
        // $stat = $conn->prepare($sql);
        // $stat->bind_param("", );
        // $stat->execute();
        // $result = $stat->get_result();

        // if ($user = $result->fetch_assoc()) {
        //     if ($user['senha'] === $password){
        //         unset($user['senha']);
        //         return $user;
        //     }
        // }
    }

    public static function buscarPorId($conn) {
        //testte
    }

    public static function create($conn, $data) {
        $sql = "INSERT INTO quartos (nome, num, preco, qtd_cama_s, qtd_cama_c, disponivel) 
        VALUES (?, ?, ?, ?, ?, ?);";
        
        $stat = $conn->prepare($sql);
        $stat->bind_param("sidiii", 
            $data['nome'],
            $data['num'],
            $data['preco'],
            $data['qtd_s'],
            $data['qtd_c'],
            $data['disponivel']
        );
        return $stat->execute();
    }

    public static function atualizar($conn) {

    }

    public static function deletar($conn) {
        
    }

    public static function buscarDisponivel($conn) {

    }
}

?>