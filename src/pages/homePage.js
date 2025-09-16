import Hero from "../components/Hero.js";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import RoomCard from "../components/RoomCard.js";
import DateSelector from "../components/DateSelector.js";

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

    const dateSelect = DateSelector();
    home.appendChild(dateSelect);

    const card = document.createElement('div');
    card.className = "cardContainer";
    

    for (var i=0; i < 3; i++) {
        const cardContainer = RoomCard();
        card.appendChild(cardContainer);
    }

    home.appendChild(card);
}