export default function RoomCard() {
    const card = document.createElement('div');
    card.className = 'card-container'; 
    card.innerHTML = `
<div class="card" style="width: 22rem;">

    <!-- Carrossel Bootstrap -->
    <div id="carouselRoom" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">

            <div class="carousel-item active">
                <img src="publics/assets/img/room1.jpg" class="d-block w-100 card-img-top" alt="Quarto 1">
            </div>

            <div class="carousel-item">
                <img src="publics/assets/img/room2.jpg" class="d-block w-100 card-img-top" alt="Quarto 2">
            </div>

            <div class="carousel-item">
                <img src="publics/assets/img/room3.jpg" class="d-block w-100 card-img-top" alt="Quarto 3">
            </div>

        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#carouselRoom" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>

        <button class="carousel-control-next" type="button" data-bs-target="#carouselRoom" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
            
    <div class="card-body">
        <h5 class="card-title titulo">Suíte Luxo</h5>
        <p class="card-text">Desfrute do conforto da nossa Suíte Luxo com todas as comodidades.</p>
        <a href="#" class="btn btn-primary">Reservar</a>
    </div>

    <div class="card room-card"> <!-- Adicione a classe room-card aqui -->
        <!-- Conteúdo do card -->
    </div>

</div>`;

return card;
}