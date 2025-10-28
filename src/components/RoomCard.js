import { addItemToHotel_Cart } from "../store/cartStore.js";

function calculoDiaria(checkIn, checkOut) {
    /*const checkIn = "2026-01-01";
    const checkOut = "2026-01-08";*/

    const [yin, min, din] = String(checkIn).split('-').map(Number);
    const [yout, mout, dout] = String(checkOut).split('-').map(Number);
    
    const tzin = Date.UTC(yin, min - 1, din);
    const tzout = Date.UTC(yout, mout - 1, dout);

    return Math.floor((tzout - tzin) / (1000 * 60 * 60 * 24));
}

export default function RoomCard(itemCard, index = 0) {

    const {
        id,
        nome,
        numero,
        qnt_cama_casal,
        qnt_cama_solteiro,
        preco
} = itemCard || {};

const title = nome;

const camas = [
    (qnt_cama_casal != null ? `${qnt_cama_casal} cama(s) de casal` : null),
    (qnt_cama_solteiro != null ? `${qnt_cama_solteiro} cama(s) de solteiro` : null),
].filter(Boolean).join(' - ');

    const card = document.createElement('div');
    card.className = 'cardContainer'; 
    card.innerHTML = `
<div class="card" style="width: 22rem;">

    <!-- Carrossel Bootstrap -->
    <div id="carouselExampleIndicators-${index}" class="carousel slide">

        <div class="carousel-indicators">
            <button visually-hiddentype="button" data-bs-target="#carouselExampleIndicators-${index}" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators-${index}" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators-${index}" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div class="carousel-inner shadow">
            <div class="carousel-item active">
                <img src="publics/assets/img/room1.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="publics/assets/img/room2.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="publics/assets/img/room3.jpg" class="d-block w-100" alt="...">
            </div>
        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators-${index}" data-bs-slide="prev">
            <span class="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>

        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators-${index}" data-bs-slide="next">
            <span class="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
            
    <div class="card-body">
        <h5 class="card-title titulo">${title}</h5>

        <ul class=list-unstyled mb-2>
            ${camas? `<li>${camas}` : ""}
            ${preco != null ? `<li>Preco: R$ ${Number(preco).toFixed(2)}</li>` : ""}
        </ul>

        <p class="card-text">Desfrute do conforto da nossa Suíte Luxo com todas as comodidades.</p>
        <a href="#" class="btn btn-primary btn-reserve">Reservar</a>
    </div>

</div>`;

    card.querySelector(".btn-reserve").addEventListener('click', (e) => {
        e.preventDefault();
        
        // Ler informações setadas nos imputs dateCheckIn, dateCheckOut e guestAmount (IDs)
        const idDateCheckin = document.getElementById('id-dateCheckIn');
        const idDateCheckout = document.getElementById('id-dateCheckOut');
        const idGuestAmount = document.getElementById('id-guestAmount');

        const inicio = (idDateCheckin?.value || "");
        const fim = (idDateCheckout?.value || "");
        const capacidade = parseInt(idGuestAmount?.value || "0", 10);

        /*Validação do preenchimento de infos => contexto: Usuário pesquisou quartos disponiveis, mas na hora de
        simplesmente reservar, usuário voltou ao campo do check-in ou check-out e limpou a informação de lá, mas
        não setou uma nova pesquisa p/ buscar novamnete quartos*/
        if (!inicio || !fim || Number.isNaN(capacidade) || capacidade <= 0) {
            console.log("Preencha todos os campos!");
            return;
        }

        const daily = calculoDiaria(inicio, fim);
        
        //Cálculo do subtotal do quarto (preco * nº de diárias)
        const subtotal = parseFloat(preco) * daily;
        const newItemReserve = {
            id,
            nome,
            checkIn: inicio,
            checkOut: fim,
            guests: capacidade,
            daily,
            subtotal
        }

        addItemToHotel_Cart(newItemReserve);
        //Alerta pode ser trocado por um modal com melhor aparência
        alert(`Reserva do quarto adicionada: ${nome} 
            - Preço/diária: ${preco} 
            - Nº de diárias ${daily} 
            - Subtotal: R$ ${subtotal}`);

    });

    return card;
}