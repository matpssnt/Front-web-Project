export async function clientRequest(nome, cpf, telefone, email, senha) {
    const dados = {nome, cpf, telefone, email, senha};
    
    const response = await fetch ("api/client",  {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json"
        },

        body: JSON.stringify(dados),
        credentials: "same-origin"
    });

    // Interpreta a resposta como JSON
    let data = null;

    try {
        data = await response.json();
    }
    catch {
        // Se não for JSON válido, data permanece null
        data = null;
    }
    return {
        ok: true,
        raw: data
    };
}