export default function Navbar() {
    const navbar = document.createElement('div'); 
    navbar.innerHTML = `
<nav class="navbar navbar-expand-lg bg-black navbar-dark">
    <div class="container-fluid">

        <a class="navbar-brand" href="home">
            <img src = "publics/assets/img/LogoHotelBlack.png" style="width: 65px; height: 60px; background-color: rgba(255, 255, 255, 0.4);">
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">

            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="home">Home</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>

                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="register">Cadastre-se</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="login">Login</a>
                </li>
            </ul>

            <a class="nav-link" href="cart" style="position: relative; right: 20px;">
                <img src="publics/assets/img/basket2-fill.svg" style="width: 35px; height: 35px; filter: invert(1);">
            </a>
            
        </div>
    </div>
</nav>`;
return navbar;
}