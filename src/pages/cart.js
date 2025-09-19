import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Hero from "../components/Hero.js";

export default function renderCartPage() {

    const nav = document.getElementById('navbar');
    nav.innerHTML = '';

    const navbar = Navbar();
    nav.appendChild(navbar);

    const pezin = document.getElementById('footer');
    pezin.innerHTML = '';
        
    const footer = Footer();
    pezin.appendChild(footer);

    const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';
}