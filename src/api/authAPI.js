export async function loginRequest(email, senha) {
    const response = await fetch ("/api/login.php", {
        method: "POST",
        headers: {
            "Accept":"application/json",
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
        },
        body: new URLSearchParams({ email, senha }).toString(),
 
        /* URL da requisição é a mesma da origem do front (mesmo protocolo http/
        mesmo dominio - local/mesma porta 80 do servidor web apache)
        Front: http://localhost/Possonato/public/index.html
        Back: http://localhost/Possonato/api/login.php
        */
       credentials: "same-origin"
    });
       
    //Interpreta a resposta como JSON
    let data = null;
    try {
        data = await response.json();
    }
    catch{
        // Se nao for JSON valido, data permanece null
        data = null;
    }
 
    return {
        ok: true,
        user: data.user ?? null,
        raw: data
    }
 
}
 