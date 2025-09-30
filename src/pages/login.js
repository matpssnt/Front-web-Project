import { loginRequest, saveToken } from "../api/authAPI.js";
import Form from "../components/Form.js";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

export default function renderLoginPage() {

    const formu = Form();
    const contentForm = formu.querySelector('form');

    const nav = document.getElementById('navbar');
    nav.innerHTML = '';

    const navbar = Navbar();
    nav.appendChild(navbar);
    

    const pezin = document.getElementById('footer');
    pezin.innerHTML = '';

    const footer = Footer();
    pezin.appendChild(footer);



    const backLogin = document.createElement('a');
    backLogin.href = 'register';
    backLogin.textContent = 'Não tem uma conta? Faça seu cadastro';
    backLogin.style.cssText = 'color: #4a90e2; text-decoration: none; margin-top: 1.5rem; display: block; text-align: center; font-weight: 500;';


    backLogin.addEventListener('mousedown', () => {
        backLogin.style.color = '#2877eeff'; // Escuro no click
    });

    backLogin.addEventListener('mouseenter', () => {
        backLogin.style.color = '#2877eeff'; // Escuro no Mouse
    });

    backLogin.addEventListener('mouseleave', () => {
        backLogin.style.color = '#4a90e2'; // Original
    });


    backLogin.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.pathname = 'register';
    });

    formu.appendChild(backLogin);


     //Inputs e botão presentes no form
    const inputEmail = contentForm.querySelector('input[type="email"]');
    const inputSenha = contentForm.querySelector('input[type="password"]');
    //const btn = contentForm.querySelector('button[type="submit"]');
 
    //Monitora o clique no botão para acionar um evento de submeter os dados do form
    contentForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const email = inputEmail.value.trim();
        const senha = inputSenha.value.trim();
 
        try {
            const result = await loginRequest(email, senha);
            saveToken(result.token);
            console.log("Login realizado com sucesso");
            // window.location.pathname = "/Possonato/home";
        }
       
        catch {
            console.log("Erro inesperado!");
        }
    });
 
}

