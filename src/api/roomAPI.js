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