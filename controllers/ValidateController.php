<?php


class ValidateRoutes {

    public static function AuthClient($data) {
        $validateCamps = [
            'login_id', 'nome', 'cpf', 'telefone', 'cargo_id'
        ];
        
        return self::validarCampos($data, $fieldsInportant, 'Cliente');
    }

    public static function AuthRoom($data) {
        $validateCamps = [
            'nome', 'num', 'preco', 'qtd_cama_s', 'qtd_cama_c', 'disponivel'
        ];
        
        return self::validarCampos($data, $fieldsInportant, 'Quarto');
    }

    public static function AuthReserv($data) {
        $validateCamps = [
            'pedido_id', 'quarto_id', 'inicio', 'fim'
        ];
        
        return self::validarCampos($data, $fieldsInportant, 'Reserva');
    }

    public static function AuthRequest($data) {
        $validateCamps = [
            'usuario_id', 'cliente_id', 'data_hora', 'pagamento'
        ];
        
        return self::validarCampos($data, $fieldsInportant, 'Pedido');
    }

    public static function AuthAdic($data) {
        $validateCamps = [
            'nome', 'preco'
        ];
        
        return self::validarCampos($data, $fieldsInportant, 'Adicional');
    }



    private static function validarCampos($data, $fieldsInportant, $entidade) {
        $camposFaltantes = [];
        
        foreach ($fieldsInportant as $fields) {
            if (!isset($data[$fields]) || empty(trim($data[$fields]))) {
                $camposFaltantes[] = $fields;
            }
        }
        
        if (!empty($camposFaltantes)) {
            return [
                'sucesso' => false,
                'mensagem' => "Erro! Os campos obrigatórios estão vazios em: $entidade",
                'campos_faltantes' => $camposFaltantes,
                'entidade' => $entidade
            ];
        }

        // Validações específicas por campo
        $errosValidate = self::validateTypesDatas($data, $entidade);
        if (!empty($errosValidate)) {
            return [
                'sucesso' => false,
                'mensagem' => "Erros de validação em: $entidade",
                'erros_validacao' => $errosValidate,
                'entidade' => $entidade
            ];
        }
        
        return ['sucesso' => true];
    }

    private static function validateTypesDatas($data, $entidade) {
        $erros = [];
        
        switch ($entidade) {
            case 'Cliente':
                if (isset($data['email']) && !filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
                    $erros[] = 'Email inválido';
                }
                if (isset($data['cpf']) && !self::validarCPF($data['cpf'])) {
                    $erros[] = 'CPF inválido';
                }
                break;
                
            case 'Usuário':
                if (isset($data['email']) && !filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
                    $erros[] = 'Email inválido';
                }
                if (isset($data['senha']) && strlen($data['senha']) < 6) {
                    $erros[] = 'Senha deve ter pelo menos 6 caracteres';
                }
                break;
                
            case 'Reserva':
                if (isset($data['data_entrada']) && isset($data['data_saida'])) {
                    if (strtotime($data['data_entrada']) >= strtotime($data['data_saida'])) {
                        $erros[] = 'Data de entrada deve ser anterior à data de saída';
                    }
                }
                break;
        }
        
        return $erros;
    }
}


?>