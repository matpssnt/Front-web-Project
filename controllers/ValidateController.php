<?php


class ValidateController {

    public static function AuthClient($data) {
        $validateCamps = [
            'nome', 'email', 'telefone', 'cpf', 'cargo_id', 'senha'
        ];
        
        return self::validarCampos($data, $validateCamps, 'Cliente');
    }

    public static function AuthRoom($data) {
        $validateCamps = [
            'nome', 'numero', 'qnt_cama_solteiro', 'qnt_cama_casal', 'preco', 'disponivel'
        ];
        
        return self::validarCampos($data, $validateCamps, 'Quarto');
    }

    public static function AuthReserv($data) {
        $validateCamps = [
            'pedido_id', 'quarto_id', 'adicional_id', 'inicio', 'fim'
        ];
        
        return self::validarCampos($data, $validateCamps, 'Reserva');
    }

    public static function AuthRequest($data) {
        $validateCamps = [
            'usuario_id', 'cliente_id', 'data', 'pagamento'
        ];
        
        return self::validarCampos($data, $validateCamps, 'Pedido');
    }

    public static function AuthAdic($data) {
        $validateCamps = [
            'nome', 'preco'
        ];
        
        return self::validarCampos($data, $validateCamps, 'Adicional');
    }



    private static function validarCampos($data, $validateCamps, $entidade) {
        $camposFaltantes = [];
        
        foreach ($validateCamps as $camps) {
            if (!isset($data[$camps]) || empty(trim($data[$camps]))) {
                $camposFaltantes[] = $camps;
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
                if (isset($data['nome']) && empty(trim($data['nome']))) {
                    $erros[] = 'O preenchimento do nome é obrigatório';
                }
                if (isset($data['senha']) && strlen($data['senha']) < 6) {
                    $erros[] = 'A senha deve ter pelo menos 6 caractéres';
                }
                break;
                
            case 'Reserva':
                if (isset($data['inicio']) && isset($data['fim'])) {
                    if (strtotime($data['inicio']) >= strtotime($data['fim'])) {
                        $erros[] = 'Data de checkin deve ser anterior à data de checkout';
                    }
                }
                break;
        }
        
        return $erros;
    }
        
    private static function validarCPF($cpf) {
        $cpf = preg_replace('/[^0-9]/', '', $cpf);
        
        if (strlen($cpf) != 11) {
            return false;
        }
        return true;
    }
}


?>