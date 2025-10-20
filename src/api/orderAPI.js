export async function finishedOrder(items) {
    const url = "api/order/reservation";

    const body = {
        pagamento: "pix",
        quartos: items.map(itm => (
            {
                id: itm.roomID,
                inicio: itm.checkIn,
                fim: itm.checkOut
            }
        ))
    };

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Accept":"application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body),
        credentials: "same-origin"
    });

    if (!response.ok) {
        const message = `Erro ao enviar pedido: ${response.status}`;
        throw new Error(message);
    }
    return response.json();
}