export async function loginRequest(email, password) {
    const dados = {email, password};

    const response = await fetch ("api/clientlogin", {
        method: "POST",
        headers: {
            "Accept":"application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados),
        //body: new URLSearchParams({ "email":email, "password": password }).toString(),
 
        /* URL da requisição é a mesma da origem do front (mesmo protocolo http/
        mesmo dominio - local/mesma porta 80 do servidor web apache)
        Front: http://localhost/Possonato/public/index.html
        Back: http://localhost/Possonato/api/Login.php
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
 
    if (!data || !data.token){
        const message = "Resposta inválida do servidor. Token ausente!"
        return {ok: false, token: null, raw: data, message};
    }

    return {
        ok: true,
        token: data.token,
        raw: data
    };
}

/*Função para salvar a chave token após a autenticação confirmada,
após salvar no local storage, o usuário poderá mudar de página, fechar
o site e ainda assim permanecer logado, DESDE QUE O TEMPO NÃO TENHA EXPIRADO (1h)*/
export function saveToken(token) {
    localStorage.setItem("authToken", token);
}

/*Recuperar a chave a cada página que o usuário navegar*/
export function getToken() {
    localStorage.getItem("authToken");
}

/*Função para remover a chave token quando o usuário deslogar*/

export function clearToken() {
    localStorage.removeItem("authToken");
}

/*
<form>



</form>
*/