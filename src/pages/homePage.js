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

    const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';
    
    const containerHero = Hero();
    divRoot.appendChild(containerHero);

    const dateSelect = DateSelector();
    divRoot.appendChild(dateSelect);

    const card = document.createElement('div');
    card.className = "cardContainer";
    

    for (var i=0; i < 3; i++) {
        const cardContainer = RoomCard(i);
        card.appendChild(cardContainer);
    }

    divRoot.appendChild(card);
}