export default function Hero() {
    const containerHero = document.createElement('div');
    containerHero.style.width = '600px'
    containerHero.innerHTML = `
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">

    <ol class="carousel-indicators">
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
    </ol>

    <div class="carousel-inner">

        <div class="carousel-item active">
            <img class="d-block w-100" src="publics/assets/img/slide-1.jpg" alt="First slide">
        </div>

        <div class="carousel-item">
            <img class="d-block w-100" src="publics/assets/img/slide-2.jpg" alt="Second slide">
        </div>

        <div class="carousel-item">
            <img class="d-block w-100" src="publics/assets/img/slide-3.jpg" alt="Third slide">
        </div>

    </div>

    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </a>

    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </a>
</div>`;

    setTimeout(() => {
        const carousel = new bootstrap.Carousel(containerHero.querySelector('#carouselExampleIndicators'));
    }, 100);
    
    return containerHero;
}