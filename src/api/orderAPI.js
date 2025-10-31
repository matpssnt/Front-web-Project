import { getToken } from "./authAPI.js";

export async function finishedOrder(methodPayment, reservations) {
    const url = "api/order/reservation";

    const body = {
        pagamento: methodPayment,
        quartos: reservations.map(itm => (
            {
                id: itm.id,
                inicio: itm.checkIn,
                fim: itm.checkOut
            }
        ))
    };

    const token = getToken?.();

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Accept":"application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(body),
        credentials: "same-origin"
    });

    let data = null;

    try {
        data = await response.json();
    }
    catch { data = null }

    if (!response.ok) {
        const message = `Erro ao enviar pedido: ${response.status}`;
        return {ok: false, raw: data, message};
    }
    return {
        ok: true,
        raw: data
    }
}