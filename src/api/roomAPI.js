export async function cadRoom(contentForm) {
    const formData = new FormData(contentForm);
    const typeAccept = ['image/jpeg', 'image/png'];
    const inputFotos = contentForm.querySelector('#formFileMultiple');
    const imgs = inputFotos.files;
    for (let i = 0; i < imgs.length; i++) {
        if(!typeAccept.includes(imgs[i].type)) {
            throw new Error(`Arquivo "${imgs[i].name}" não é suportado.
            Selecione um arquivo JPG ou PNG`);
        }
    }
    const url = `api/rooms`;
    const response = await fetch(url, {
        method: "POST",
        body: formData
    });
    if(!response.ok) {
        throw new Error(`Erro ao enviar requisição: ${response.status}`);
    }
    const result = await response.json();
    return result;
}   

export async function listAvailableRoomsRequest({ inicio, fim, capacidade }) {
    const params = new URLSearchParams();

    if (inicio) params.set("inicio", inicio);
    if (fim) params.set("fim", fim);
    if (capacidade !== null && capacidade !== "") params.set("capacidade", String(capacidade));
 
    const url = `api/rooms/disponiveis?${params.toString()}`;
    console.log(url);
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Accept": "application/json",
        },
        credentials: "same-origin"
    });

    let data = null;
    try {
        data = await response.json();
    }
    catch {
        data = null;
    }

    if (!response.ok) {
        const msg = data?.message || "Falha ao buscar quartos disponíveis!";
        throw new Error(msg);
    }

    const quartos = Array.isArray(data?.Quartos) ? data.Quartos : [];
    console.log(quartos);
    return quartos;
}