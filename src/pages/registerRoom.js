import RegisterRoom from "../components/RegisterRoom.js";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

export default function renderRegRoomPage() {
    const nav = document.getElementById('navbar');
    nav.innerHTML = '';

    const navbar = Navbar();
    nav.appendChild(navbar);

    const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';


    const registerRoomForm = RegisterRoom();

    const containerRoom = document.createElement('div');
    containerRoom.className = 'cords';

    containerRoom.appendChild(registerRoomForm);
    divRoot.appendChild(containerRoom);

    const pezin = document.getElementById('footer');
    pezin.innerHTML = '';

    const footer = Footer();
    pezin.appendChild(footer);
}