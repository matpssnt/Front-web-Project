import Form from "../components/Form.js";
import Navbar from "../components/Navbar.js";

export default function renderLoginPage() {

    const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';

    const nav = document.getElementById('navbar');
    nav.innerHTML = '';

    const navbar = Navbar();
    nav.appendChild(navbar);
    

    const formu = Form();
    divRoot.appendChild(formu);
    

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
    const btn = contentForm.querySelector('button[type="submit"]');
 
    //Monitora o clique no botão para acionar um evento de submeter os dados do form
    contentForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const email = inputEmail.value.trim();
        const senha = inputSenha.value.trim();
 
        try {
            const result = await loginRequest(email, senha);
            console.log("Login realizado com sucesso");
            //window.location.pathname = /home;
        }
       
        catch {
            console.log("Erro inesperado!");
        }
    });
 
}

