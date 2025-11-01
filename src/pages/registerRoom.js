// pages/registerRoom.js
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import cadRoom from "../components/CadRoom.js";

export default function renderRegRoomPage() {
    const nav = document.getElementById('navbar');
    nav.innerHTML = '';

    const navbar = Navbar();
    nav.appendChild(navbar);


    const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';
    divRoot.style.minHeight = '100vh';

    const RoomForm = cadRoom();

    const containerRoom = document.createElement('div');
    // containerRoom.className = 'cards';

    containerRoom.appendChild(RoomForm);
    divRoot.appendChild(containerRoom);

    const footer = document.getElementById('footer');
    footer.innerHTML = '';

    const pezin = Footer();
    footer.appendChild(pezin);

}