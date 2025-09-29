import Footer from "../components/Footer.js"
import Navbar from "../components/Navbar.js";


export default function renderCartPage(){
    
    const nav = document.getElementById('navbar');
    nav.innerHTML = '';

    const navbar = Navbar();
    nav.appendChild(navbar);

    const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';



    const foot = document.getElementById('footer');
    foot.innerHTML = '';
        
    const footer = Footer();
    foot.appendChild(footer);
}