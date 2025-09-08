import Form from "../components/Form.js";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

export default function renderRegisterPage() {
    
    const nav = document.getElementById('navbar');
    nav.innerHTML = '';
    
    const navbar = Navbar();
    nav.appendChild(navbar);


    const pezin = document.getElementById('footer');
    pezin.innerHTML = '';
    
    const footer = Footer();
    pezin.appendChild(footer);
    

    const formu = Form();

    const titulo = formu.querySelector('h1');
    titulo.textContent = 'Crie uma conta';
    titulo.className = 'titulo';


    const contentForm = formu.querySelector('form');


    const nome = document.createElement('input');
    nome.type = 'text';
    nome.placeholder = 'Digite o seu nome';

    const inputEmail = formu.querySelector('input[type="email"]');
    contentForm.insertBefore(nome, inputEmail);

    const confPassword = document.createElement('input');
    confPassword.type = 'password';
    confPassword.placeholder = "Confirme a senha";

    contentForm.insertBefore(confPassword, contentForm.children[3]);

    const btnRegister = formu.querySelector('button');
    btnRegister.textContent = "Criar conta";

}