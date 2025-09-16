export default function RoomCard() {
    const card = document.createElement('div');
    card.className = 'cardContainer'; 
    card.innerHTML = `
<div class="card" style="width: 22rem;">

    <!-- Carrossel Bootstrap -->
    <div id="carouselExampleIndicators-RoomCard" class="carousel slide">

        <div class="carousel-indicators">
            <button visually-hiddentype="button" data-bs-target="#carouselExampleIndicators-RoomCard" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators-RoomCard" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators-RoomCard" data-bs-slide-to="2" aria-label="Slide 3"></button>
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

        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators-RoomCard" data-bs-slide="prev">
            <span class="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>

        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators-RoomCard" data-bs-slide="next">
            <span class="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
            
    <div class="card-body">
        <h5 class="card-title titulo">Suíte Luxo</h5>
        <p class="card-text">Desfrute do conforto da nossa Suíte Luxo com todas as comodidades.</p>
        <a href="#" class="btn btn-primary">Reservar</a>
    </div>

</div>`;

return card;
}