import Form from "../components/Form.js";
import Navbar from "../components/navbar.js";

export default function renderLoginPage() {

    const nav = document.getElementById('navbar');
    nav.innerHTML = '';

    const navbar = Navbar();
    nav.appendChild(navbar);
    

    const formu = Form();
}
