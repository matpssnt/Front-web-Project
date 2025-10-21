function calculoDiaria(checkIn, checkOut) {
    const checkIn = "2026-01-01";
    const checkOut = "2026-01-08";

    const [yin, min, din] = String(checkIn).split('-').map(Number);
    const [yout, mout, dout] = String(checkOut).split('-').map(Number);
    
    const tzin = Date.UTC(yin, min - 1, din);
    const tzout = Date.UTC(yout, mout - 1, dout);

    return Math.floor((tzout - tzin) / (1000 * 60 * 60 * 24));
}

export default function RoomCard(itemCard, index = 0) {

    const {
    nome,
    numero,
    qnt_cama_casal,
    qnt_cama_solteiro,
    preco,
    disponivel
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
        <a href="#" class="btn btn-primary">Reservar</a>
    </div>

</div>`;

return card;
}