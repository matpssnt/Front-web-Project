import Hero from "../components/Hero.js";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import RoomCard from "../components/RoomCard.js";

export default function renderHomePage() {

    const nav = document.getElementById('navbar');
    nav.innerHTML = '';

    const navbar = Navbar();
    nav.appendChild(navbar);

    const pezin = document.getElementById('footer');
    pezin.innerHTML = '';
        
    const footer = Footer();
    pezin.appendChild(footer);

    const home = document.getElementById('root');
    home.innerHTML = '';
    
    const containerHero = Hero();
    home.appendChild(containerHero);

    const card = document.getElementById('card-container');
    card.innerHTML = '';

    const containerCard = RoomCard();
    card.appendChild(containerCard);

}